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

  function login(username, password) {
    const credentials = { username: username, password: password };
    return authAxios
      .post("/auth/login", credentials)
      .then(res => {
        console.log("user/token", res.data.user, res.data.token);
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

  return (
    <Context.Provider
      value={{
        user,
        token,
        login,
        logout
      }}
    >
      {props.children}
    </Context.Provider>
  );
}