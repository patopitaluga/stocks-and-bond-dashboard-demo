const res = require('express/lib/response');
const fakeDb = require('../../database/fake-db-for-demo.js');

/**
 * This controller will handle the POST fetch to /api/buy.
 *
 * @param {object} _req - Http request
 * @param {object} _res - Http response
 */
module.exports = async(_req, _res) => {
  if (!_req.body.itemId) return _res.status(400).send({ status: 'Missing itemId POST param.', });
  if (typeof _req.body.itemId !== 'string') return _res.status(400).send({ status: 'itemId POST param should be a string.', });
  if (!_req.body.amount) return _res.status(400).send({ status: 'Missing amount POST param.', });
  if (typeof _req.body.amount !== 'number') return _res.status(400).send({ status: 'amount POST param should be a number.', });

  fakeDb.sellSubscribed(_req.body.itemId, _req.body.amount);

  setTimeout(fakeDelayToDisplayLoading, 1500);
  function fakeDelayToDisplayLoading() {
    _res.send({ status: 'done', });
  };
};
