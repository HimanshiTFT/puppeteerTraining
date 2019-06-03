//Test the clear tax website title
const puppeteer = require('puppeteer');
const assert = require('chai').assert;

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://cleartax.in/');
  const pageTitle = await page.title();
  await page.screenshot({path: '/screenshots/testTitle.png'});
  assert.equal(pageTitle, 'Free Income Tax efiling in India: ClearTax | Upload your Form-16 to e-File Income Tax Returns');
  await page.close();
  await browser.close();
})();