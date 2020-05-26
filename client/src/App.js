import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserContext } from "./context/UserProvider";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import GlobalStyle from "./theme/GlobalStyle";
import Navbar from "./components/Navbar";
import Registration from "./pages/Registration";
import Homepage from "./pages/Homepage";
import ProtocolsPage from "./pages/Protocols";
// import Medical from "./pages/Medical"
import MedList from "./pages/MedList";
import DocumentList from "./pages/DocumentList";
import { Details } from "./components/styledComponents";

const AppWrapper = styled.div``;

function App(props) {
  const { user } = useContext(UserContext)
  console.log(user)

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path="/" render={()=> user ? <Homepage/> : <Redirect to="/registration"/>}/>
          <Route exact path="/registration" render={()=> user ? <Redirect to="/"/> : <Registration/>} />
          <Route exact path="/protocols" render={()=> user ? <ProtocolsPage/> : <Redirect to="/"/> }  />
          <Route path="/protocols/:category" render={(rProps)=> user ? <DocumentList {...rProps}/> : <Redirect to="/"/> } />
          <Route exact path="/medical" render={()=> user ? <MedList/> : <Redirect to="/"/> }
          />
          <Route path="/medical/:id" render={(rProps)=> user ? <Details>{rProps.match.params.id}</Details> : <Redirect to="/"/> }
          />

        </Switch>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
