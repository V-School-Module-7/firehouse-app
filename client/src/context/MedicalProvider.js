// import React, { useState } from "react";
// import axios from "axios";


// export const MedicalContext = React.createContext();


// export default function MedicalProvider(props) {

//     const [medicalDataToDisplay, setMedicalDataToDisplay] = useState([]);

// function getMedicalDataByCondition(condition) {
//     axios
//     .get(`/medical/condition/${condition}`)
//     .then(res => {
//         console.log(res)
//         setMedicalDataToDisplay([...res.data]);
//     })
//     .catch(err => console.error(err))
// }


// return (
//     <MedicalProvider.Provider
//     value={{
//         medicalDataToDisplay,
//         getMedicalDataByCondition
//     }}>
//     {props.children}
//     </MedicalProvider.Provider>
// );

// }