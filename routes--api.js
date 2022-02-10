const sessionMiddleware = require('./controllers/api/mdlwr-create-session-portfolio.js');

module.exports = (_app) => {
  _app.get('/api/user-portfolio', sessionMiddleware, require('./controllers/api/ctrlr-user-portfolio'));
  _app.get('/api/available-investments', sessionMiddleware, require('./controllers/api/ctrlr-investment-list'));
  _app.post('/api/buy', sessionMiddleware, require('./controllers/api/ctrlr-buy'));
  _app.post('/api/sell', sessionMiddleware, require('./controllers/api/ctrlr-sell'));
};
