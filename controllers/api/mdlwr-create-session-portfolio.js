
const fakeDb = require('../../database/fake-db-for-demo.js');

/**
 * This function will work as an express middleware to set a new portfolio for every session/user.
 *
 * @param {object} _req - Http request
 * @param {object} _res - Http response
 * @param {function} _next - trigger next express middleware.
 */
module.exports = (_req, _res, _next) => {
  if (_req.session && !_req.session.myPortfolio) {
    _req.session.myPortfolio = {
      savings: 4200000, // in cents
      investments: [
        {
          _id: 'a1',
          amountSubscribed: 10,
        },
        {
          _id: 'a3',
          amountSubscribed: 15,
        },
        {
          _id: 'a7',
          amountSubscribed: 20,
        },
      ],
    };
    console.log('new session')
  }
  _next();
};
