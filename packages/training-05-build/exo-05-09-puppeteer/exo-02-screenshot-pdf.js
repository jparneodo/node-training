const puppeteer = require('puppeteer');

const FILE = './logs/puppeteer.page.pdf';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.chromestatus.com', { waitUntil: 'networkidle2' });
  await page.pdf({ path: FILE, format: 'A4' });
  await browser.close();
  console.log(`See ${FILE}`);
})();
