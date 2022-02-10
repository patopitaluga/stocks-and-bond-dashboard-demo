const fakeDb = {
  myPortfolio: {
    savings: 40000,
    investments: [
      {
        _id: 'a1',
        name: 'Ternium Argentina',
        type: 'stock',
        amountSubscribed: 10,
        currentValue: 100,
        valueSubscribed: 10 * 100,
      },
      {
        _id: 'a2',
        name: 'Transportadora Gas del Norte',
        type: 'stock',
        amountSubscribed: 5,
        currentValue: 120,
        valueSubscribed: 5 * 120,
      },
      {
        _id: 'a3',
        name: 'Aluar',
        type: 'stock',
        amountSubscribed: 2,
        currentValue: 90,
        valueSubscribed: 2 * 90,
      },
      {
        _id: 'a4',
        name: 'BOCAN 2022',
        type: 'bond',
        amountSubscribed: 2,
        currentValue: 90,
        valueSubscribed: 2 * 90,
      },
      {
        _id: 'a5',
        name: 'ARGENTINA 7 75 2022',
        type: 'bond',
        amountSubscribed: 2,
        currentValue: 90,
        valueSubscribed: 2 * 90,
      },
      {
        _id: 'a6',
        name: 'REPÚBLICA ARGENTINA 3 375 2023',
        type: 'bond',
        amountSubscribed: 2,
        currentValue: 90,
        valueSubscribed: 2 * 90,
      },
      {
        _id: 'a7',
        name: 'BONO REPÚBLICA ARGENTINA LEY LOCAL 2038',
        type: 'bond',
        amountSubscribed: 2,
        currentValue: 90,
        valueSubscribed: 2 * 90,
      },
      {
        _id: 'a8',
        name: 'BONO REPÚBLICA ARGENTINA LEY LOCAL 2029 IN...',
        type: 'bond',
        amountSubscribed: 2,
        currentValue: 90,
        valueSubscribed: 2 * 90,
      },
    ],
  },

  /**
   * Used in the ctrlr-buy controller.
   *
   * @param {string} _itemId -
   * @param {number} _amount -
   */
  addSubscribed: (_itemId, _amount) => {
    if (!_itemId) throw new Error('Missing _itemId argument.');
    if (!_amount) throw new Error('Missing _amount argument.');
    if (_amount === 0) return;

    const match = fakeDb.myPortfolio.investments.find((_eachItemInPortfolio) => _eachItemInPortfolio._id === _itemId);
    if (match)
      match.amountSubscribed += _amount;
  },
};

module.exports = fakeDb;
