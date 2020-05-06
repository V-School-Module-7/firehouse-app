
const fs = require("fs");

//only read medical-data folder
fs.readdir("./client/src/medical-data", (err, medications)=> {
    const medicalDataCollection = medications
    .filter( file => file != 'index.js')
    .map(file => require(`./client/src/medical-data/${file}`))
    console.log(medicalDataCollection)
})