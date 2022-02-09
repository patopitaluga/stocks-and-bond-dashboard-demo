module.exports = (_app) => {
  _app.get('/api/my-investments', require('./controllers/api/ctrlr-my-investments'));
};
