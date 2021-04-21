import React, { useState } from "react";
import axios from "axios";

export const DrugContext = React.createContext();

// const authAxios = axios.create();
// authAxios.interceptors.request.use(config => {
//   const token = localStorage.getItem("token");
//   config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

export default function DrugProvider(props) {
  const [drugsToDisplay, setDrugsToDisplay] = useState([]);


  function getDrugsByCategory(category) {
    axios
      .get(`/drug/category/${category}`)
      .then(res => {
        console.log(res)
        setDrugsToDisplay([...res.data]);
      })
      .catch(err => console.error(err));
  }


  return (
    <DrugContext.Provider
      value={{
        drugsToDisplay,
        getDrugsByCategory
      }}
    >
      {props.children}
    </DrugContext.Provider>
  );
}
