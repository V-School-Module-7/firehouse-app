import React, { useState } from "react";
import axios from "axios";


export const MedicalContext = React.createContext();


export default function MedicalProvider(props) {

    const [medicalDataToDisplay, setMedicalDataToDisplay] = useState([]);

    function getAllMedicalData(medications) {
    axios
    .get(`/medical`)
    .then(res => {
        console.log(res)
        setMedicalDataToDisplay([...res.data]);
    })
    .catch(err => console.error(err))
    }

    function getMedicalDataByCondition(conditions){
        axios
        .get(`/medical/${conditions}`)
        .then(res => {
                console.log(res)
                setMedicalDataToDisplay([...res.data]);
        })
        .catch(err => console.log(err))
    }


return (
    <MedicalContext.Provider
        value={{
            medicalDataToDisplay,
            getAllMedicalData,
            getMedicalDataByCondition
        }}
    >
        {props.children}
    </MedicalContext.Provider>
    );
}