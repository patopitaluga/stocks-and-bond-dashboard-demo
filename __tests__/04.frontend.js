// Pupetter page documentation https://pptr.dev/#?product=Puppeteer&version=v5.2.1&show=api-class-page
require('dotenv').config();

jest.setTimeout(60000);

// const testingUrl = process.env.TESTING_URL;
const testingUrl = 'http://localhost:3000';

describe('Frontend', () => {
  if (true) // to turn on/off tests easily
    it('Index/list page should work', async() => {
      await page.goto(testingUrl + '/');
    });
  if (true) // to turn on/off tests easily
    it('Vue components should render', async() => {
      await page.waitForSelector('.my-investments');
      await page.waitForSelector('.other-investments');
      await page.waitForSelector('.total');
    });
  if (true) // to turn on/off tests easily
    it('The detail of a stock/bond should be displayed', async() => {
      await page.waitForSelector('.my-investments__list button'); // wait until fetch returns and it's rendered
      await page.click('.my-investments__list button');

      await page.waitForSelector('.detail');
    });
}, 120000);
