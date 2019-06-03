//Clear tax Product Options test
const puppeteer = require('puppeteer');
const assert = require('chai').assert;

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://cleartax.in/');
  await page.waitForSelector('#for_you_top_button');
  const productBtnName = await page.evaluate(() => document.querySelector('#for_you_top_button').innerText);
  await page.screenshot({path: 'screenshots/productButton.png'});
  assert.equal(productBtnName, 'Products', 'Button name is not Product');
  await page.click('#for_you_top_button');

  //Assertion to check total 6 product options are available
  const productOptionCount = await page.$$("a[class='column btn-column']")
  assert.lengthOf(productOptionCount, 6, 'Product option has a length of 6');

  //IT option checks
  await page.waitForSelector('.column:nth-child(1) div[class="icon-dots blue-dots"]');
  const itIcon = await page.evaluate(() => document.querySelector('.column:nth-child(1) div[class="icon-dots blue-dots"]').innerText);
  const itHeading = await page.evaluate(() => document.querySelector('.column:nth-child(1) h3').innerText);
  assert.equal(itIcon, 'IT', 'IT option not available');
  assert.equal(itHeading, 'Income Tax Filing', 'IT option heading is incorrect');

  //CA 
  const caIcon = await page.evaluate(() => document.querySelector('.column:nth-child(2) div[class="icon-dots blue-dots"]').innerText);
  const caHeading = await page.evaluate(() => document.querySelector('.column:nth-child(2) h3').innerText);
  assert.equal(caIcon, 'CA', 'CA option not available');
  assert.equal(caHeading, 'CA & Expert Assisted Services', 'CA option heading is incorrect');

  //80C
  const taxSavingIcon = await page.evaluate(() => document.querySelector('.column:nth-child(3) div[class="icon-dots orange-dots"]').innerText);
  const taxSavingHeading = await page.evaluate(() => document.querySelector('.column:nth-child(3) h3').innerText);
  assert.equal(taxSavingIcon, '80c', 'CA option not available');
  assert.equal(taxSavingHeading, 'Tax Saving', 'CA option heading is incorrect');

  //MF
  const mfIcon = await page.evaluate(() => document.querySelector('.column:nth-child(4) div[class="icon-dots orange-dots"]').innerText);
  const mfHeading = await page.evaluate(() => document.querySelector('.column:nth-child(4) h3').innerText);
  assert.equal(mfIcon, 'MF', 'MF option not available');
  assert.equal(mfHeading, 'Mutual fund Investments', 'MF option heading is incorrect');

  //GST
  const gstIcon = await page.evaluate(() => document.querySelector('.column:nth-child(5) div[class="icon-dots green-dots"]').innerText);
  const gstHeading = await page.evaluate(() => document.querySelector('.column:nth-child(5) h3').innerText);
  assert.equal(gstIcon, 'GST', 'GST option not available');
  assert.equal(gstHeading, 'GST Software', 'GST option heading is incorrect');

  //TC
  const tcIcon = await page.evaluate(() => document.querySelector('.column:nth-child(6) div[class="icon-dots green-dots"]').innerText);
  const tcHeading = await page.evaluate(() => document.querySelector('.column:nth-child(6) h3').innerText);
  assert.equal(tcIcon, 'TC', 'TC option not available');
  assert.equal(tcHeading, 'TaxCloud (Direct Tax Software)', 'TC option heading is incorrect');

  await page.close();
  await browser.close();
})();