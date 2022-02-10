module.exports = (_app) => {
  _app.get('/api/user-portfolio', require('./controllers/api/ctrlr-user-portfolio'));
  _app.get('/api/available-investments', require('./controllers/api/ctrlr-investment-list'));
};
