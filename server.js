const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config()
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const expressValidator = require('express-validator');
// const app = express();
const app = express();
const port = 3000;
const connectDb = require("./src/connection");
const User = require("./src/User.model");

// Use Body Parser
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add after body parser initialization!
// get data back from db 
const handlebars = require('handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(handlebars),
});
app.engine('handlebars', hbs.engine);
// Use handlebars to render
app.set('view engine', 'handlebars');
app.use(expressValidator());
app.use(express.static('public'));
app.use(express.static('public/static/images'));



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
app.use(checkAuth);

require('./data/reddit-db');
require('./controllers/posts.js')(app);
require('./controllers/comments.js')(app);
require('./controllers/auth.js')(app);
require('./controllers/replies.js')(app);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// connectDb().then(() => {
//     console.log("MongoDb connected");
//     });

module.exports = app;

