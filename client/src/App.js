import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

import GlobalStyle from "./theme/GlobalStyle";
import Navbar from "./components/Navbar";
import Registration from "./pages/Registration";
import Homepage from "./pages/Homepage";
import ProtocolsPage from "./pages/Protocols";
import DocumentList from "./pages/DocumentList";


const AppWrapper = styled.div``;

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <GlobalStyle />
        {/*<Navbar />*/}
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/protocols" component={ProtocolsPage} />
          <Route path="/protocols/:category" component={DocumentList} />
        </Switch>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default withRouter(App);
