//Clear tax- Product: Income Tax Filing option navigation test
const puppeteer = require('puppeteer');
const expect = require('chai').expect;

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://cleartax.in/');
  await page.waitForSelector('#for_you_top_button');
  await page.click('#for_you_top_button');
  await page.waitForSelector('.column:nth-child(1) h3');
  const itSubText = await page.evaluate(() => document.querySelector('.column:nth-child(1) p').innerText);
  expect(itSubText).to.contain('File Income tax returns for free in 7 minutes');
  await page.click('.column:nth-child(1) p');
  await page.waitForSelector('#tax-file-save');
  
  //Check the naviagtion page title  of Income Tax filing screen
  const pageTitle = await page.title();
  expect(pageTitle).equal('FREE e-Filing of Income Tax Returns Online - ITR efiling - IT Returns India');

  //Check the data overlay options when Income tax filing option is clicked
  const taxFileOption = await page.evaluate(() => document.querySelector('#tax-file-save').innerText);
  const caLegalServiceOption = await page.evaluate(() => document.querySelector('#ca-legal-services').innerText);
  const gstBilingOption = await page.evaluate(() => document.querySelector('#gst-billing').innerText);
  expect(taxFileOption).to.contain('Tax Filing & Saving');
  expect(caLegalServiceOption).to.contain('CA & Legal Services');
  expect(gstBilingOption).to.contain('GST & Billing');

  //Check the presence of start your tax return and upload form 16 buttons
  const startTaxBtn = await page.evaluate(() => document.querySelector("a[title='Start Your Tax Return']").innerText);
  expect(startTaxBtn).to.contain('Start Your Tax Return');
  const uploadFormBtn = await page.evaluate(() => document.querySelector("a[title='Have Form16: Upload Now']").innerText);
  expect(uploadFormBtn).to.contain('Have Form-16? Upload Now');

  await page.close();
  await browser.close();
})();