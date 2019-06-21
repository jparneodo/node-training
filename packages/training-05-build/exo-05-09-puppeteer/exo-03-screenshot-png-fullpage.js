const puppeteer = require('puppeteer');

const FILE = './logs/puppeteer.page.screenshot-fullpage.png';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com', { waitUntil: 'networkidle2' });
  await page.screenshot({
    path: FILE,
    fullPage: true,
  });
  await browser.close();
  console.log(`See ${FILE}`);
})();
