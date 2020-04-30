const express = require("express");
const medDataRouter = express.Router();
const MedicalData = require("../models/medicalData");

medDataRouter.route("/").get((req, res, next) => {
  MedicalData.find((err, medicalData) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(medicalData);
  });
});
//get all medData by condition
medDataRouter.route("/condition/:condition").get((req, res, next) => {
  MedicalData.find({ category: req.params.condition }, (err, medicalData) => {
    console.log(medicalData);
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(500).send(medicalData);
  });
});

module.exports = medDataRouter;
