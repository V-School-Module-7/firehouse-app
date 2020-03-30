import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import ProtocolProvider from "./context/ProtocolProvider";
import UserProvider from "./context/UserProvider";

ReactDOM.render(
  <BrowserRouter>
  <UserProvider>
    <ProtocolProvider>
      <App />
    </ProtocolProvider>
  </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
