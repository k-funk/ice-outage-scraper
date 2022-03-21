import puppeteer from 'puppeteer'

const ICE_URL = 'https://www.grupoice.com/wps/portal/ICE/electricidad/suspensiones-electricas-programadas'

async function task(options = { quiet: true }) {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto(ICE_URL)
  await page.waitForNetworkIdle()
  await page.waitForTimeout(2000)
  await page.type('#txtSearch', 'manuel')
  await page.screenshot({ path: './test.png' })
  browser.close()

  console.log(options.quiet ? '.' : 'Done')
}

async function main() {
  task({ quiet: false })
}

main()
