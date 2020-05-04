const fs = require("fs");
const {medications} = require("./client/src/medical-data/index.js");



fs.writeFile("./medicationData", JSON.stringify(medications.data), () =>
  console.log("Data is successful")
);
