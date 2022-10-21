import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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
import Pediatric from './pages/pediatric'
import PediatricCard from './components/PediatricCard'
import Algorithms from './pages/Algorithms'
import Lab from './pages/Lab'
import Infusion from './pages/Infusion'

const AppWrapper = styled.div``;

// const page404 = () => {
//   return (
//     <h3>404 - Not found</h3>
//   );
// };

function App(props) {
  const { user } = useContext(UserContext)
  console.log(user)

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={user ? <Homepage/> : <Navigate to="/registration"/>}
          />
          <Route  path="/registration" element={user ? <Navigate to="/"/> : <Registration/>}
          />
          <Route exact path="/protocols" element={user ? <ProtocolsPage/> : <Navigate to="/"/> }
          />
          <Route path="/protocols/general" component={General} />
          <Route path="/protocols/cardiac" element={user ? <Cardiac /> : <Navigate to="/"/> }
          />
          <Route exact path="/protocols/medical" element={user ? <Medical /> : <Navigate to="/"/> }
          />
          <Route path="/protocols/trauma" element={user ? <Trauma /> : <Navigate to="/"/> }
          />
          <Route path="/protocols/:category" element={ user ? <DocumentList /> : <Navigate to="/"/> }
          />
          <Route exact path="/medical" element={user ? <MedList/> : <Navigate to="/"/> }
          />
          <Route path="/medical/pediatric/" element={user ? <Pediatric /> : <Navigate to="/"/> }
          />
          <Route path="/medical/pediatric/:id" element={user ? <PediatricCard /> : <Navigate to="/"/> }
          />
          <Route path="/medical/algorithms" element={user ? <Algorithms /> : <Navigate to="/"/> }
          />
          <Route path="/medical/lab" element={user ? <Lab /> : <Navigate to="/"/> }
          />
          <Route path="/medical/infusion" element={user ? <Infusion /> : <Navigate to="/"/> }
          />
          <Route path="/medical/:condition" element={user ? <WeightsList /> : <Navigate to="/"/> }
          />
          <Route exact path='/fire' element={user ? <FirePage/> : <Navigate to="/"/> } 
          />
          
          
          

          {/* <Route path="*" component={page404 */}

        </Routes>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
