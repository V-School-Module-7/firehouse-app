const express = require("express");
const medDataRouter = express.Router();
const Medical = require("../models/medical.js");

medDataRouter   //getAll medical data
  .route("/")
  .get((req, res, next) => {
    Medical.find((err, medications) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(medications);
    });
  })

//getAll medical Conditions
medDataRouter
  .route("/medical/:conditions").get((req, res, next) => {

    Medical.find({ conditions: req.params.conditions }, (err, medConditions) => {
    console.log(medConditions);
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(medConditions);
  });
});

module.exports = medDataRouter;
