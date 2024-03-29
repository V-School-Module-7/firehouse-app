import React, { useState } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import sizeUpData from "../fire-data/sizeUpData"
import buildingData from '../fire-data/buildingData';
import veisData from '../fire-data/veisData';
import ventilationData from '../fire-data/ventilationData';
import coLevelsData from '../fire-data/coLevelsData';

export const FireContext = React.createContext();

export default function FireProvider(props) {
    const [fireDataToDisplay, setFireDataToDisplay] = useState([]);
    
    function getFiresByCategory(category) {
        axios
        .get(`/fire/category/${category}`)
        .then(res =>{
            console.log(res)
            setFireDataToDisplay([...res.data]);
        })
        .catch(err => console.error(err));
    }

    const dataObj = {
        sizeUpData, 
        buildingData,
        veisData,
        ventilationData,
        coLevelsData
    }
    
    const [fireData, setFireData] = useState(dataObj)

    function toggle(index) {
        let arrayCopy = [...fireData.sizeUpData.info]
        // console.log(arrayCopy, "arrCopy")
        arrayCopy[index].toggled ? arrayCopy[index].toggled = false : arrayCopy[index].toggled = true
  
        setFireData({...fireData, info: arrayCopy})
  
      }
      
      function sanitizeData(dirty) {
        return {__html: DOMPurify.sanitize(dirty)}
      }
 
    return (
        <FireContext.Provider 
            value={{
                fireDataToDisplay,
                getFiresByCategory,
                toggle,
                fireData,
                sanitizeData
            }}
            >
                {props.children}
            </FireContext.Provider>
    );
}