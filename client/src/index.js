import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import ProtocolProvider from "./context/ProtocolProvider";
import UserProvider from "./context/UserProvider";
import MedicalProvider from "./context/MedicalProvider";
import FireProvider from './context/FireProvider';
import PediatricProvider from './context/PediatricProvider'

ReactDOM.render(
  <BrowserRouter>
  <UserProvider>
    <ProtocolProvider>
      <MedicalProvider>
      <FireProvider>
      <PediatricProvider>
        <App />
      </PediatricProvider>
      </FireProvider>
      </MedicalProvider>
    </ProtocolProvider>
  </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
