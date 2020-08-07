import React, { useState } from 'react';
import axios from 'axios';

export const FireContext = React.createContext();

export default function FireProvider(props) {
    const [fireDataToDisplay, setFireDataToDisplay] = useState([]);

    function getFiresByCategory(category) {
        axios
        .get(`/fire/category/${category}`)
        .then(res =>{
            console.log(res)
            setFiresToDisplay([...res.data]);
        })
        .catch(err => console.error(err));
    }


    return (
        <FireContext.Provider 
            value={{
                firesToDisplay,
                getFiresByCategory
            }}
            >
                {props.children}
            </FireContext.Provider>
    );
}