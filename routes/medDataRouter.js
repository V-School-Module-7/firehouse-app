const express = require("express");
const medDataRouter = express.Router();
const Medical = require("../models/medical.js");

medDataRouter   //getAll medical data
  .route("/")
  .get((req, res, next) => {
    Medical.find((err, medicalData) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(medicalData);
    });
  })
//   //post new medical data to DB
//   .post((req, res, next) => {
//     const newMedical = new Medical(req.body);

//     newMedical.save((err, medData) => {
//       if (err) {
//         res.status(500);
//         return next(err);
//       }
//       return res.status(201).send(medData);
//     });
//   });
// //getAll medData by medication
// medDataRouter
//   .route("/medical/:medications").get((req, res, next) => {

//     Medical.find({ medications: req.params.medications }, (err, medicalData) => {
//     console.log(medicalData);
//     if (err) {
//       res.status(500);
//       return next(err);
//     }
//     return res.status(200).send(medicalData);
//   });
// });

module.exports = medDataRouter;
