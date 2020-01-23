const express = require("express");
const protocolRouter = express.Router();
const Protocol = require("../models/protocol");

protocolRouter
  .route("/")
  // get all protocols, regardless of category
  .get((req, res, next) => {
    Protocol.find((err, protocols) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(protocols);
    });
  });

protocolRouter
  .route("/:category")
  // get all protocols in category
  .get((req, res, next) => {
    Protocol.find({ category: req.params.category }, (err, protocols) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(protocols);
    });
  });

protocolRouter
  .route("/:category/:_id")
  // get one protocol by id
  .get();

module.exports = protocolRouter;
