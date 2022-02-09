module.exports = (_app) => {
  _app.post('/api/some-endpoint', require('./controllers/api/ctrlr-some-endpoint'));
};
