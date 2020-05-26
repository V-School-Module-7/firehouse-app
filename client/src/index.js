import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import ProtocolProvider from "./context/ProtocolProvider";
import UserProvider from "./context/UserProvider";
import MedicalProvider from "./context/MedicalProvider";

ReactDOM.render(
  <BrowserRouter>
  <UserProvider>
    <ProtocolProvider>
      <MedicalProvider>
        <App />
      </MedicalProvider>
    </ProtocolProvider>
  </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
