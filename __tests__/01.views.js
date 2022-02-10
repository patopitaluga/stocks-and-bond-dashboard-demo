// Pupetter page documentation https://pptr.dev/#?product=Puppeteer&version=v5.2.1&show=api-class-page
require('dotenv').config();
const axios = require('axios');

// const testingUrl = process.env.TESTING_URL;
const testingUrl = 'http://localhost:3000';

jest.setTimeout(60000);

describe('Frontend views', () => {
  if (true) // to turn on/off tests easily
    it('Index page should work', async() => {
      const httpResponseIndex = await axios.get(testingUrl + '/');

      await expect(httpResponseIndex).resolves.toMatch(true);
    });
}, 120000);
