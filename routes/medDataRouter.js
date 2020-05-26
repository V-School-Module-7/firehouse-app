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

//getAll medData by medication
medDataRouter
  .route("/medical/:conditions").get((req, res, next) => {

    Medical.find({ conditions: req.params.conditions }, (err, medicalData) => {
    console.log(medicalData);
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(medicalData);
  });
});

module.exports = medDataRouter;
