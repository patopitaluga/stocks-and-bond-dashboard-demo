const path = require('path');

module.exports = (_app) => {
  _app.get('/', (_req, _res) => {
    _res.sendFile(path.resolve(__dirname, './views/index.html'));
  });
};
