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
  })
  // post new protocol to db
  .post((req, res, next) => {
    const newProtocol = new Protocol(req.body);
    newProtocol.save((err, protocol) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(protocol);
    });
  });

protocolRouter
  .route("/category/:category")
  // get all protocols in category
  .get((req, res, next) => {

    Protocol.find({ category: req.params.category }, (err, protocols) => {
      console.log(protocols)
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(protocols);
    });
  });

protocolRouter
  .route("/:_id")
  // get one protocol by id
  .get((req, res, next) => {
    Protocol.findById(req.params._id, (err, protocol) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(protocol);
    });
  });

module.exports = protocolRouter;
