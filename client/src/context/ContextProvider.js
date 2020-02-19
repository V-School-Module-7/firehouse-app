import React, { useState } from "react";
import axios from "axios";

export const Context = React.createContext();

const authAxios = axios.create();
authAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default function ContextProvider(props) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [protocols, setProtocols] = useState([]);
  const [protocolsToDisplay, setProtocolsToDisplay] = useState([]);

  function login(username, password) {
    const credentials = { username, password };
    return authAxios
      .post("/auth/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setUser(res.data.user);
        setToken(res.data.token);
      })
      .catch(err => console.error(err));
  }
  function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
    setToken("");
  }

  function getProtocolsByCategory(category) {
    axios
      .get(`/protocol/category/${category}`)
      .then(res => {
        setProtocolsToDisplay([...res.data]);
      })
      .catch(err => console.error(err));
  }

  return (
    <Context.Provider
      value={{
        user,
        token,
        login,
        logout,
        protocols,
        protocolsToDisplay,
        getProtocolsByCategory
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
