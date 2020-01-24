import React from "react";
import styled from "styled-components";

import GlobalStyle from "./theme/GlobalStyle";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

const AppWrapper = styled.div``;

export default function App(props) {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Navbar />
      <Homepage />
    </AppWrapper>
  );
}
