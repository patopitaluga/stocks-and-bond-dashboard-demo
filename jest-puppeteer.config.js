require('dotenv').config();

module.exports = {
  launch: {
    // headless: process.env.PUPPETEER_HEADLESS !== 'false',
    // executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    // headless: false,
    // executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-notifications',
      '--window-size=1366,768',
      '--detectOpenHandles',
    ],
    defaultViewport: {
      width: 1366,
      height: 640,
    },
  },
  server: {
    // command: 'npm run build && npm run start',
    command: 'npm run dev',
    port: 3000,
    launchTimeout: 60000,
    debug: false,
  },
};
