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
  const [protocolsToDisplay, setProtocolsToDisplay] = useState([]);

  //add signup feature

  // function signup(user){
  //   axios
  //   .post("/auth/signup", user)
  //   .then(res => {
  //     const {user, token} = res.data
  //     localStorage.setItem("user", JSON.stringify(user))
  //     localStorage.setItem("token", token)
  //     this.setState({ user: token })
  //   })
  //   .catch(err => console.error(err))
  // }

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

{/* add signup, */}
  return (
    <Context.Provider
      value={{
        user,
        token,
        login,
        logout,
        protocolsToDisplay,
        getProtocolsByCategory
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
