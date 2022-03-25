import puppeteer from 'puppeteer'
import pad from 'pad'

const ICE_URL = 'https://www.grupoice.com/wps/portal/ICE/electricidad/suspensiones-electricas-programadas'
const LANGUAGE = 'en'
const SEARCH_TERM = 'manuel' // this must match the language. ie: "lemon" instead of "limón" if in english

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

async function getData(browser: puppeteer.Browser, debug: boolean) {
  const page = await browser.newPage()
  await page.goto(ICE_URL)
  await page.waitForNetworkIdle()
  await page.waitForTimeout(2000)

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
  } else {
    const rows = await page.$$('#tablaDatos > tbody > tr')
    log(`Number of Planned Outages: ${rows.length}`)
    const textContentsOfRows = await Promise.all(rows.map(row => row.$$eval('td:not([hidden]) .contenidoSpan', els => els.map(el => el.textContent))))
    log(textContentsOfRows, true)
  }
}

async function task(options = { quiet: true, debug: false }) {
  const browser = await puppeteer.launch({ headless: true })

  try {
    await getData(browser, options.debug)
  } catch(err) {
    console.error(err)
  }

  browser.close()

  if (options.quiet) {
    console.log('.')
  } else {
    log('Done')
  }
}

async function main() {
  task({ quiet: false, debug: true })
}

main()
