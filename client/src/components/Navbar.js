import React from "react";
import styled from "styled-components";

const NavbarWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 75px;
  background-color: rgb(176, 176, 176);
  display: flex;
  align-content: center;
  justify-content: center;
`;
const Title = styled.h1`
  text-align: center;
  color: #ffffff;
`;

function Navbar(props) {
  return (
    <NavbarWrapper>
      <Title>Lehi Fire</Title>
    </NavbarWrapper>
  );
}

export default Navbar;
