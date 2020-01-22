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
      };
      return res.status(200).send(protocols)
    });
  });

protocolRouter
  .route("/:categoryId")
  // get all protocols in category
    .get((req, res, next) => {
      Protocol.find({ category: req.params.categoryId }, (err, protocols) => {
        if (err) {
          res.status(500);
          return next(err);
        };
        return res.status(200).send(protocols);
      });
    });

  // post new protocol
  .post();

protocolRouter
  .route("/:categoryId/:_id")
  // get one protocol by id
  .get()

  // edit one protocol by id
  .put()

  // delete one protocol by id
  .delete();

module.exports = protocolRouter;
