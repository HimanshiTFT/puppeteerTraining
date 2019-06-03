//Clear tax About us test
const puppeteer = require('puppeteer');
const assert = require('chai').assert;

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://cleartax.in/');
  await page.waitForSelector('a[class="about-us"]');
  const aboutUsbtn = await page.evaluate(() => document.querySelector('a[class="about-us"]').innerText);
  assert.equal(aboutUsbtn, 'About us', 'Button name is not about us');
  await page.click('a[class="about-us"]');
  const pageTitle = await page.title();
  assert.equal(pageTitle, 'The Team at ClearTax, India’s Largest Online e-Filing Website');

  await page.close();
  await browser.close();
})();