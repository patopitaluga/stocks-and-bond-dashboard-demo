
const fakeDb = require('../../database/fake-db-for-demo.js');

/**
 * This controller will handle the GET fetch to /api/user-portfolio.
 *
 * @param {object} _req - Http request
 * @param {object} _res - Http response
 */
module.exports = async(_req, _res) => {
  setTimeout(fakeDelayToDisplayLoading, 1500);
  function fakeDelayToDisplayLoading() {
    _res.send(fakeDb.getMyPortfolio());
  };
};
