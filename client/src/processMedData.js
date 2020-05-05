import medications from '../medical-data/index'

const fs = require("fs");


fs.readdir("./medical-data/index", (err, medications)=> {
    const medicalDataCollection = medications.map(file => require(`./medical-data/index/${file}`))
    console.log(medicalDataCollection)
})