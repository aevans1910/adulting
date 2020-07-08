const User = require("../models/users");
const jwt = require('jsonwebtoken')

const checkUser = (req, res, next) => {
  console.log("Checking authentication");

  if ( req.body.token !== null || req.query.token !== null) {
    let token = "";
    if (req.query.token != null) {
      token = req.query.token;
    } else {
      token = req.body.token;
    }
    const decodedToken = jwt.verify(token, { complete: true }) || {};
    console.log("user found")
    req.user = decodedToken.payload;
  } else {
    req.user = null;
    console.log("no user")
  }
  next();
};


module.exports = checkUser;