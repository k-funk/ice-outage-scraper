import puppeteer from 'puppeteer'
import pad from 'pad'
import dotenv from 'dotenv'
import sendGrid from '@sendgrid/mail'

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

async function getData(browser: puppeteer.Browser, debug: boolean) {
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

  await page.type('#txtSearch', SEARCH_TERM)
  const hasNoResults = await page.$$('#tablaDatos > tbody > tr > td.dataTables_empty')

  if (debug) {
    await page.screenshot({ path: './test.png', fullPage: true })
  }

  if (hasNoResults.length === 1) {
    log(`No planned outages based on search term: "${SEARCH_TERM}"`)
    return
  }

  const rows = await page.$$('#tablaDatos > tbody > tr')
  log(`Number of Planned Outages: ${rows.length}`)
  const textContentsOfRows = await Promise.all(rows.map(row => row.$$eval('td:not([hidden]) .contenidoSpan', els => els.map(el => el.textContent))))

  const parsedRows = parseRows(textContentsOfRows)
  log(parsedRows, true)
  return parsedRows
}

async function task(
  { quiet = true, debug = false, sendGridEnvVars }:
    { quiet: boolean, debug: boolean, sendGridEnvVars?: { key: string, to: string, from: string } }
) {

  const browser = await puppeteer.launch({ headless: true })

  let data: any
  try {
    data = await getData(browser, debug)
  } catch(err) {
    console.error(err)
  }

  browser.close()

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
  dotenv.config({ path: './.env.dev' })

  const { SENDGRID_KEY, SENDGRID_FROM, SENDGRID_TO } = process.env
  const sendGridEnvVars = SENDGRID_KEY && SENDGRID_FROM && SENDGRID_TO
    ? { key: SENDGRID_KEY, to: SENDGRID_TO, from: SENDGRID_FROM }
    : undefined
  task({
    quiet: false,
    debug: true,
    sendGridEnvVars,
  })
}
