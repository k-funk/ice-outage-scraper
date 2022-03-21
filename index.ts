import puppeteer from 'puppeteer'

const ICE_URL = 'https://www.grupoice.com/wps/portal/ICE/electricidad/suspensiones-electricas-programadas'

async function getData(browser: puppeteer.Browser) {
  const page = await browser.newPage()
  await page.goto(ICE_URL)
  await page.waitForNetworkIdle()
  await page.waitForTimeout(2000)

  // On 2022-03-20, they have what appears to be a client bug that makes the results not load on the page. However,
  // network requests suggests that the data is still coming through.
  const defaultSearchRows = await page.$$('#tablaDatos > tbody > tr')
  if (defaultSearchRows.length === 0) {
    throw new Error('No initial results on page load. The site may be malfunctioning.')
  }

  await page.type('#txtSearch', 'manuel')

  await page.screenshot({ path: './test.png' })
}

async function task(options = { quiet: true }) {
  const browser = await puppeteer.launch({ headless: true })

  try {
    await getData(browser)
  } catch(err) {
    console.error(err)
  }

  browser.close()

  console.log(options.quiet ? '.' : 'Done')
}

async function main() {
  task({ quiet: false })
}

main()
