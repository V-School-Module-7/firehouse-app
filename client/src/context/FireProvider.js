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
            setFireDataToDisplay([...res.data]);
        })
        .catch(err => console.error(err));
    }


    return (
        <FireContext.Provider
            value={{
                fireDataToDisplay,
                getFiresByCategory,
                setFireDataToDisplay
            }}
            >
                {props.children}
            </FireContext.Provider>
    );
}
