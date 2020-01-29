import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "./theme/GlobalStyle";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import LoginPage from './pages/LoginPage';

const AppWrapper = styled.div``;

export default function App(props) {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/login' component={LoginPage}
      </Switch>
    </AppWrapper>
  );
}
