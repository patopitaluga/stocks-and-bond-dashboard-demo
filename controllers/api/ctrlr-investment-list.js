

/**
 * This controller will handle the GET fetch to /api/available-investments.
 *
 * @param {object} _req - Http request
 * @param {object} _res - Http response
 */
module.exports = async(_req, _res) => {
  // Demo content
  setTimeout(demoContent, 2000);
  function demoContent() {
    _res.send([
      {
        name: 'Ternium Argentina',
        type: 'stock',
        currentValue: 100,
      },
      {
        name: 'Transportadora Gas del Norte',
        type: 'stock',
        currentValue: 120,
      },
      {
        name: 'Aluar',
        type: 'stock',
        currentValue: 90,
      },
      {
        name: 'BOCAN 2022',
        type: 'bond',
        currentValue: 90,
      },
      {
        name: 'ARGENTINA 7 75 2022',
        type: 'bond',
        currentValue: 90,
      },
      {
        name: 'REPÚBLICA ARGENTINA 3 375 2023',
        type: 'bond',
        currentValue: 90,
      },
      {
        name: 'BONO REPÚBLICA ARGENTINA LEY LOCAL 2038',
        type: 'bond',
        currentValue: 90,
      },
      {
        name: 'BONO REPÚBLICA ARGENTINA LEY LOCAL 2029 IN...',
        type: 'bond',
        currentValue: 90,
      },
    ]);
  };
};
