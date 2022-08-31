import React, { useContext } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { UserContext } from "./context/UserProvider";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import GlobalStyle from "./theme/GlobalStyle";
import Navbar from "./components/Navbar";
import Registration from "./pages/Registration";
import Homepage from "./pages/Homepage";
import ProtocolsPage from "./pages/Protocols";
import MedList from "./pages/MedList";
import DocumentList from "./pages/DocumentList";
import WeightsList from "./pages/WeightsList";
import FirePage from './pages/Fire';
import General from './pages/General'
import Cardiac from './pages/Cardiac'
import Medical from './pages/proMed'
import Trauma from './pages/Trauma'

import SizeUp from "./pages/SizeUp"
import BuildingTypes from "./pages/BuildingTypes"
import Type1 from "./pages/Type1"
import Type2 from "./pages/Type2"
import Type3 from "./pages/Type3"
import Type4 from "./pages/Type4"
import Type5 from "./pages/Type5"
import VEIS from "./pages/VEIS"

const AppWrapper = styled.div``;

// const page404 = () => {
//   return (
//     <h3>404 - Not found</h3>
//   );
// };

function App(props) {
  const { user } = useContext(UserContext)
  console.log(user, "user")

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path="/" render={()=> user ? <Homepage/> : <Redirect to="/registration"/>}
          />
          <Route exact path="/registration" render={()=> user ? <Redirect to="/"/> : <Registration/>}
          />
          <Route exact path="/protocols" render={()=> user ? <ProtocolsPage/> : <Redirect to="/"/> }
          />
          <Route path="/protocols/general" component={General} />
          <Route path="/protocols/cardiac" render={()=> user ? <Cardiac /> : <Redirect to="/"/> }
          />
          <Route exact path="/protocols/medical" render={()=> user ? <Medical /> : <Redirect to="/"/> }
          />
          <Route path="/protocols/trauma" render={()=> user ? <Trauma /> : <Redirect to="/"/> }
          />
          <Route path="/protocols/:category" render={(rProps)=> user ? <DocumentList {...rProps}/> : <Redirect to="/"/> }
          />
          <Route exact path="/medical" render={()=> user ? <MedList/> : <Redirect to="/"/> }
          />
          <Route path="/medical/:condition" render={(rProps)=> user ? <WeightsList {...rProps}/> : <Redirect to="/"/> }
          />
          <Route exact path='/fire' render={()=> user ? <FirePage/> : <Redirect to="/"/> } 
          />
          <Route path='/fire/size-up' render={()=> user ? <SizeUp /> : <Redirect to="/"/> } 
          />
          <Route exact path="/fire/building-types" render={()=> user ? <BuildingTypes /> : <Redirect to="/" /> }       
          />
          <Route path="/fire/building-types/type-1" render={()=> user ? <Type1 /> : <Redirect to="/" /> }
          />
          <Route path="/fire/building-types/type-2" render={()=> user ? <Type2 /> : <Redirect to="/" /> }
          />
          <Route path="/fire/building-types/type-3" render={()=> user ? <Type3 /> : <Redirect to="/" /> }
          />
          <Route path="/fire/building-types/type-4" render={()=> user ? <Type4 /> : <Redirect to="/" /> }
          />
           <Route path="/fire/building-types/type-5" render={()=> user ? <Type5 /> : <Redirect to="/" /> }
          />
          <Route exact path="/fire/veis" render={()=> user ? <VEIS /> : <Redirect to="/" /> }
          />
          {/* <Route path="*" component={page404} /> */}

        </Switch>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
