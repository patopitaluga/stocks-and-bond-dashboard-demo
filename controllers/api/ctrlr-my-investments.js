

/**
 * This controller will handle the POST fetch to /api/some-endpoint.
 *
 * @param {object} _req - Http request
 * @param {object} _res - Http response
 */
module.exports = async(_req, _res) => {
  // Demo content
  _res.send([
    {
      name: 'Ternium Argentina',
      type: 'stock',
      amountSubscribed: 10,
      currentValue: 100,
      valueSubscribed: 10 * 100,
    },
    {
      name: 'Transportadora Gas del Norte',
      type: 'stock',
      amountSubscribed: 5,
      currentValue: 120,
      valueSubscribed: 5 * 120,
    },
    {
      name: 'Aluar',
      type: 'stock',
      amountSubscribed: 2,
      currentValue: 90,
      valueSubscribed: 2 * 90,
    },
    {
      name: 'BOCAN 2022',
      type: 'bond',
      amountSubscribed: 2,
      currentValue: 90,
      valueSubscribed: 2 * 90,
    },
    {
      name: 'ARGENTINA 7 75 2022',
      type: 'bond',
      amountSubscribed: 2,
      currentValue: 90,
      valueSubscribed: 2 * 90,
    },
    {
      name: 'REPÚBLICA ARGENTINA 3 375 2023',
      type: 'bond',
      amountSubscribed: 2,
      currentValue: 90,
      valueSubscribed: 2 * 90,
    },
    {
      name: 'BONO REPÚBLICA ARGENTINA LEY LOCAL 2038',
      type: 'bond',
      amountSubscribed: 2,
      currentValue: 90,
      valueSubscribed: 2 * 90,
    },
    {
      name: 'BONO REPÚBLICA ARGENTINA LEY LOCAL 2029 IN...',
      type: 'bond',
      amountSubscribed: 2,
      currentValue: 90,
      valueSubscribed: 2 * 90,
    },
  ]);
};
