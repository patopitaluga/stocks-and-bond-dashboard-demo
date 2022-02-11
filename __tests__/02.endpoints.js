// Pupetter page documentation https://pptr.dev/#?product=Puppeteer&version=v5.2.1&show=api-class-page
require('dotenv').config();
const axios = require('axios');

// const testingUrl = process.env.TESTING_URL;
const testingUrl = 'http://localhost:3000';

jest.setTimeout(60000);

describe('Api endpoints', () => {
  if (true) { // to turn on/off tests easily
    it('GET endpoint /api/user-portfolio should work', async() => {
      const httpResponse = await axios.get(testingUrl + '/api/user-portfolio');
      await expect(String(httpResponse.status)).toMatch('200');
    });
    it('GET e /api/available-investments page should work', async() => {
      const httpResponse = await axios.get(testingUrl + '/api/available-investments');
      await expect(String(httpResponse.status)).toMatch('200');
    });
    it('POST endpoint /api/buy page should work', async() => {
      const httpResponse = await axios.post(testingUrl + '/api/buy', {
          itemId: 'a3',
          amount: 10,
        });
      await expect(String(httpResponse.status)).toMatch('200');
    });
    it('POST endpoint /api/buy page shouldn\'t work without amount value', async() => {
      const httpResponse = await axios.post(testingUrl + '/api/buy', {
          itemId: 'a3',
        },
        {
          validateStatus: () => true // allow 400 without triggering .catch
        });
      await expect(String(httpResponse.status)).toMatch('400');
    });
  }
}, 120000);
