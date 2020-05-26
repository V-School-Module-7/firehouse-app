import React, { useState } from "react";
import axios from "axios";

export const ProtocolContext = React.createContext();

// const authAxios = axios.create();
// authAxios.interceptors.request.use(config => {
//   const token = localStorage.getItem("token");
//   config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

export default function ProtocolProvider(props) {
  const [protocolsToDisplay, setProtocolsToDisplay] = useState([]);


  function getProtocolsByCategory(category) {
    axios
      .get(`/protocol/category/${category}`)
      .then(res => {
        console.log(res)
        setProtocolsToDisplay([...res.data]);
      })
      .catch(err => console.error(err));
  }


  return (
    <ProtocolContext.Provider
      value={{
        protocolsToDisplay,
        getProtocolsByCategory
      }}
    >
      {props.children}
    </ProtocolContext.Provider>
  );
}
