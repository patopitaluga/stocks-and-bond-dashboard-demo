// Pupetter page documentation https://pptr.dev/#?product=Puppeteer&version=v5.2.1&show=api-class-page
require('dotenv').config();

jest.setTimeout(60000);

const fakeDb = require('../database/fake-db-for-demo.js');

describe('Database operations', () => {
  if (true) { // to turn on/off tests easily
    it('availableInvestments should be a non-empty array', async() => {

      await expect(fakeDb.availableInvestments).toBeTruthy();
      await expect(typeof fakeDb.availableInvestments).toMatch('object');
      await expect(Array.isArray(fakeDb.availableInvestments)).toBeTruthy();
    });
    it('availableInvestments should be a non-empty array', async() => {

      await expect(fakeDb.availableInvestments).toBeTruthy();
      await expect(typeof fakeDb.availableInvestments).toMatch('object');
      await expect(Array.isArray(fakeDb.availableInvestments)).toBeTruthy();
    });
    it('getMyPortfolio should bring an object with savings and investments', async() => {
      const fakeSession = { myPortfolio: { savings: 40000, investments: [], }, };
      const myPortfolio = fakeDb.getMyPortfolio(fakeSession);

      await expect(myPortfolio.savings).toBeTruthy();
      await expect(typeof myPortfolio.investments).toMatch('object');
      await expect(Array.isArray(myPortfolio.investments)).toBeTruthy();
    });
    it('addSubscribed should add to the amountSubscribed prop in the item in the investments array and substract money from savings', async() => {
      const fakeSession = { myPortfolio: { savings: 40000, investments: [{ _id: 'a1', amountSubscribed: 10, }, ], }, };
      const result = fakeDb.addSubscribed(fakeSession, 'a1', 5); // this should be improve to use one always existing in the available investments.

      await expect(result._id).toBeTruthy();
      await expect(result.amountSubscribed).toBe(15);
      await expect(fakeSession.myPortfolio.savings).toBeLessThan(40000);
    });
    it('addSubscribed of a non existing item should return null', async() => {
      const fakeSession = { myPortfolio: { savings: 40000, investments: [{ _id: 'a1', amountSubscribed: 10, }, ], }, };

      await expect(fakeDb.addSubscribed(fakeSession, '--asdiasydasd8', 5)).toBe(null);
    });
  }
}, 120000);
