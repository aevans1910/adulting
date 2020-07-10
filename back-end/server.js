const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const handlebars = require('handlebars');
const cors = require('cors');

const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const hbs = exphbs.create({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(handlebars),
});

require("dotenv").config()
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const expressValidator = require('express-validator');
// const app = express();
var app = express();
const port = 3050
app.use(cors())

var checkAuth = (req, res, next) => {
    console.log("Checking authentication");
    if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
      req.user = null;
    } else {
      var token = req.cookies.nToken;
      var decodedToken = jwt.decode(token, { complete: true }) || {};
      req.user = decodedToken.payload;
    }
  
    next();
  };

app.use(cookieParser())
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')
app.use(checkAuth);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(express.static('public'));
require('./data/reddit-db');
require('./controllers/posts.js')(app);
require('./controllers/comments.js')(app);
require('./controllers/auth.js')(app);


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
module.exports = app;