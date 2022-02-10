require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

const session = require('express-session');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'a' + (Math.random() + 1).toString(36).substring(7), // To avoid setting an env secret for the demo I'm setting a different secret on every server start.
  resave: false,
  saveUninitialized: true,
  cookie: { secure: (process.env.NODE_ENV === 'development') ? false : true, },
}));

app.use(express.static('public'));

require('./routes--views')(app);
require('./routes--api')(app);

app.listen((process.env.PORT || 3000), function () {
  console.log('App listening on port ' + (process.env.PORT || 3000));
});
