import React, {useState, useEffect} from 'react';
import axios from 'axios';

 export const PediatricContext = React.createContext();

export default function PediatricProvider(props){

     const [pediatricDataToDisplay, setPedatricDataToDisplay] = useState([]);

    function getAllPediatricData(){
        axios.get(`/pediatric`)
            .then(res => {
                console.log(res)
                setPedatricDataToDisplay([...res.data]);
            })
            .catch(err => console.error(err))
    }

return(
    <PediatricContext.Provider
        value={{
            pediatricDataToDisplay,
            getAllPediatricData,
        }}>
        {props.children}
        </PediatricContext.Provider>
)

}

