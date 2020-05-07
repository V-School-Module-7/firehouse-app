
const fs = require("fs");

//only read medical-data folder
fs.readdir("./client/src/medical-data", (err, medications)=> {
    const medicalDataCollection = medications
    .filter( file => file != 'index.js')
    .map(file => require(`./client/src/medical-data/${file}`))
    fs.mkdir("./medical-output", () => console.log("Created new folder 'medical-output'"))
    fs.writeFile("./medical-output/data.json", JSON.stringify(medicalDataCollection), () => {
        console.log("Written to medical-output.json file")
    })

})