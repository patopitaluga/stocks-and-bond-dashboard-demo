const fakeDb = require('../../database/fake-db-for-demo.js');

/**
 * This controller will handle the POST fetch to /api/update.
 * Example: POST to /api/update body { itemId: 'asd98hasdh0', value: 6000 } OR { name: 'Aluar', value: 6000 }
 * The money value is expressed in cents.
 *
 * @param {object} _req - Http request
 * @param {object} _res - Http response
 */
module.exports = async(_req, _res) => {
  if (!_req.body.itemId && !_req.body.name) return _res.status(400).send({ status: 'Missing itemId or name POST param.', });
  if (_req.body.itemId && typeof _req.body.itemId !== 'string') return _res.status(400).send({ status: 'itemId POST param should be a string.', });
  if (_req.body.name && typeof _req.body.name !== 'string') return _res.status(400).send({ status: 'name POST param should be a string.', });
  if (!_req.body.value) return _res.status(400).send({ status: 'Missing value POST param.', });
  if (typeof _req.body.value !== 'number') return _res.status(400).send({ status: 'amount POST param should be a number.', });

  fakeDb.updateItem(_req.body.itemId, _req.body.name, _req.body.value);

  setTimeout(fakeDelayToDisplayLoading, 1500);
  function fakeDelayToDisplayLoading() {
    _res.send({ status: 'done', });
  };
};
