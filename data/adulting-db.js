//* Mongoose Connection */
const mongoose = require("mongoose");
const assert = require("assert");

const url = "mongodb://localhost/adulting-db";
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost/adulting-db",
  { useNewUrlParser: true }
);
mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"));
mongoose.set('debug', true);

module.exports = mongoose.connection;