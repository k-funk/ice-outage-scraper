import puppeteer from 'puppeteer'
import pad from 'pad'
import dotenv from 'dotenv'
import sendGrid from '@sendgrid/mail'
import notifier from 'node-notifier'


const APP_NAME = 'ICE Outage Notifier'
const ICE_URL = 'https://www.grupoice.com/wps/portal/ICE/electricidad/suspensiones-electricas-programadas'
const LANGUAGE = 'en'
// TODO: make this an array of search terms
const SEARCH_TERM = 'manuel' // this must match the translated language. ie: "lemon" instead of "limón" if in english

function log(msg: any, multiline?: boolean) {
  const now = new Date().toLocaleString()
  if (multiline) {
    console.log(now)
    console.log(msg)
  } else {
    console.log(`${pad(now, 23)} | ${msg}`)
  }
}

async function changeLanguage(page: puppeteer.Page) {
  await page.select('.goog-te-combo', LANGUAGE)
  await page.waitForTimeout(500) // wait for page to rerender
}

function parseRows(rows: (string | null)[][]) {
  return rows.map(row => {
    const trimmedRows = row.map(item => item?.replace(/^[\s]+|[\s]+$/g, ''))
    const [dateString, location, details] = trimmedRows
    return { dateString, location, details }
  })
}

async function getData(searchTerm: string, browser: puppeteer.Browser, debug: boolean): Promise<{ message: string, data?: { [key: string]: any }}> {
  const page = await browser.newPage()
  await page.goto(ICE_URL)
  await page.waitForNetworkIdle()
  await page.waitForTimeout(1000)

  await changeLanguage(page)

  // On 2022-03-20, they have what appears to be a client bug that makes the results not load on the page. However,
  // network requests suggests that the data is still coming through.
  const defaultSearchRows = await page.$$('#tablaDatos > tbody > tr')
  if (defaultSearchRows.length === 0) {
    throw new Error('No initial results on page load. The site may be malfunctioning.')
  }

  await page.type('#txtSearch', searchTerm)
  const hasNoResults = await page.$$('#tablaDatos > tbody > tr > td.dataTables_empty')

  if (debug) {
    await page.screenshot({ path: './test.png', fullPage: true })
  }

  if (hasNoResults.length === 1) {
    return { message: `No Planned Outages. Term "${searchTerm}"` }
  }

  const rows = await page.$$('#tablaDatos > tbody > tr')
  const textContentsOfRows = await Promise.all(rows.map(row => row.$$eval('td:not([hidden]) .contenidoSpan', els => els.map(el => el.textContent))))

  const parsedRows = parseRows(textContentsOfRows)
  return {
    message: `Planned Outages: ${rows.length}; Term: "${searchTerm}"`,
    data: parsedRows,
  }
}

async function task(
  { searchTerm, quiet = true, debug = false, sendGridEnvVars, macNotification }:
    { searchTerm: string, quiet: boolean, debug: boolean, sendGridEnvVars?: { key: string, to: string, from: string }, macNotification: boolean }
) {

  const browser = await puppeteer.launch({ headless: true })

  let message: string | undefined
  let data: any
  try {
    ({ message, data } = await getData(searchTerm, browser, debug))
  } catch(err) {
    console.error(err)
  }

  browser.close()

  log(message)
  data && log(data)

  if (macNotification) {
    notifier.notify({
      title: APP_NAME,
      message: data ? `${message}\n${JSON.stringify(data)}`: message,
      sound: true,
      // hack to make the alert stay up  until dismissed
      // see https://github.com/mikaelbr/node-notifier/issues/407#issuecomment-1210545810
      timeout: 9999999999,
    })
  }

  if (data) {
    if (sendGridEnvVars) {
      sendGrid.setApiKey(sendGridEnvVars.key)
      try {
        await sendGrid.send({
          to: sendGridEnvVars.to,
          from: sendGridEnvVars.from,
          subject: `ICE Outage Alert: ${SEARCH_TERM}`,
          text: JSON.stringify(data, null, 2),
        })
        log('Sendgrid email successful.')
      } catch (err) {
        log('Sendgrid email failed.')
        console.error(err)
      }
    } else {
      log('SendGrid not configured.')
    }
  }

  if (quiet) {
    console.log('.')
  } else {
    log('Done.')
  }
}

export default async function main() {
  dotenv.config({ path: './.env.local' })

  const { SENDGRID_KEY, SENDGRID_FROM, SENDGRID_TO, MAC_NOTIFICATION } = process.env
  const sendGridEnvVars = SENDGRID_KEY && SENDGRID_FROM && SENDGRID_TO
    ? { key: SENDGRID_KEY, to: SENDGRID_TO, from: SENDGRID_FROM }
    : undefined
  task({
    searchTerm: SEARCH_TERM,
    quiet: false,
    debug: true,
    sendGridEnvVars,
    macNotification: !!MAC_NOTIFICATION,
  })
}
