"use strict";

var express = require("express");

var app = express();

require("dotenv").config();

var path = require("path");

var morgan = require("morgan");

var mongoose = require("mongoose");

var PORT = process.env.PORT || 7000;

var expressJwt = require("express-jwt");

app.use(morgan("dev"));
app.use(express.json()); // routes

app.use("/protocol", require("./routes/protocolRouter"));
app.use("/medical", require("./routes/medDataRouter"));
app.use(express["static"](path.join(__dirname, "client", "build"))); // error handling

app.use(function (err, req, res, next) {
  console.error(err);

  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }

  return res.send({
    message: err.message
  });
}); // db connect

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/firehousedb", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log("connected to the DB");
})["catch"](function (err) {
  return console.log(err);
});
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(PORT, function () {
  console.log("server running on Port: ".concat(PORT, "............"));
});