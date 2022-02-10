const fakeDb = {
  availableInvestments: [
    {
      _id: 'a1',
      name: 'Ternium Argentina',
      type: 'stock',
      currentValue: 12625, // in cents
    },
    {
      _id: 'a2',
      name: 'Transportadora Gas del Norte',
      type: 'stock',
      currentValue: 9860, // in cents
    },
    {
      _id: 'a3',
      name: 'Aluar',
      type: 'stock',
      currentValue: 9810, // in cents
    },
    {
      _id: 'a4',
      name: 'BOCAN 2022',
      type: 'bond',
      currentValue: 9000, // in cents
    },
    {
      _id: 'a5',
      name: 'ARGENTINA 7 75 2022',
      type: 'bond',
      currentValue: 10350, // in cents
    },
    {
      _id: 'a6',
      name: 'REPÚBLICA ARGENTINA 3 375 2023',
      type: 'bond',
      currentValue: 2940, // in cents
    },
    {
      _id: 'a7',
      name: 'BONO REPÚBLICA ARGENTINA LEY LOCAL 2038',
      type: 'bond',
      currentValue: 2810, // in cents
    },
    {
      _id: 'a8',
      name: 'BONO REPÚBLICA ARGENTINA LEY LOCAL 2029 IN...',
      type: 'bond',
      currentValue: 3250, // in cents
    },
  ],

  /**
   * Used in the ctrlr-user-portfolio controller.
   *
   * @param {object} _session - the _req.session express-session object.
   * @return {object} - the investments objects ready to be displayed.
   */
  getMyPortfolio: function(_session) {
    return {
      savings: _session.myPortfolio.savings,
      investments: _session.myPortfolio.investments.map((_eachElementInMyInvestments) => {
        // each object is augmented to get current value.
        return {
          ..._eachElementInMyInvestments,
          ...fakeDb.availableInvestments.find((_eachAvailable) => _eachAvailable._id === _eachElementInMyInvestments._id),
        };
      })
    };
  },

  /**
   * Used in the ctrlr-buy controller.
   *
   * @param {object} _session - the _req.session express-session object.
   * @param {string} _itemId -
   * @param {number} _amount -
   */
  addSubscribed: (_session, _itemId, _amount) => {
    if (!_itemId) throw new Error('Missing _itemId argument.');
    if (!_amount) throw new Error('Missing _amount argument.');
    if (_amount === 0) return;

    const investment = fakeDb.availableInvestments.find((_eachInvestment) => _eachInvestment._id === _itemId);

    const alreadySubscribed = _session.myPortfolio.investments.find((_eachItemInPortfolio) => _eachItemInPortfolio._id === _itemId);
    if (alreadySubscribed)
      alreadySubscribed.amountSubscribed += _amount;
    else
      _session.myPortfolio.investments.push({
        amountSubscribed: _amount,
        _id: investment._id,
        name: investment.name,
        type: investment.type,
        currentValue: investment.currentValue,
      });

    _session.myPortfolio.savings -= _amount * investment.currentValue;
  },

  /**
   * Used in the ctrlr-sell controller.
   *
   * @param {object} _session - the _req.session express-session object.
   * @param {string} _itemId -
   * @param {number} _amount -
   */
  sellSubscribed: (_session, _itemId, _amount) => {
    if (!_itemId) throw new Error('Missing _itemId argument.');
    if (!_amount) throw new Error('Missing _amount argument.');
    if (_amount === 0) return;

    const investment = fakeDb.availableInvestments.find((_eachInvestment) => _eachInvestment._id === _itemId);

    const alreadySubscribed = _session.myPortfolio.investments.find((_eachItemInPortfolio) => _eachItemInPortfolio._id === _itemId);
    if (!alreadySubscribed) return; // catch the wrong query?

    alreadySubscribed.amountSubscribed -= _amount;

    _session.myPortfolio.savings += _amount * investment.currentValue;
  },
};

module.exports = fakeDb;
