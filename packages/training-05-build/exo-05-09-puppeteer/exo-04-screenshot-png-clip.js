const puppeteer = require('puppeteer');

const FILE = './logs/puppeteer.page.screenshot-clip.png';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com', { waitUntil: 'networkidle2' });
  await page.screenshot({
    path: FILE,
    clip: { x: 280, y: 100, width: 420, height: 200 },
    omitBackground: true,
  });
  await browser.close();
  console.log(`See ${FILE}`);
})();
