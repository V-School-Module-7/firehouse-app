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
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  function login(user, password) {
    const credentials = { username: user, password: password };
    return authAxios
      .post("/auth/login")
      .then(res => {
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        setToken(token);
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
        setUser,
        token,
        setToken,
        login,
        logout
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
