import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

import GlobalStyle from "./theme/GlobalStyle";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";

const AppWrapper = styled.div``;

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default withRouter(App);
