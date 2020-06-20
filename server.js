const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
require("dotenv").config()
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const expressValidator = require('express-validator');
// const app = express();
var app = express();
const port = 3000

// Use Body Parser
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add after body parser initialization!

app.use(expressValidator());
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
require('./data/reddit-db');
require('./controllers/posts.js')(app);
require('./controllers/comments.js')(app);
require('./controllers/auth.js')(app);


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
module.exports = app;