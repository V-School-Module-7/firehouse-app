import React from "react";
import styled from "styled-components";

const NavbarWrapper = styled.div`
  display: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 125px;
`;
const BlueBar = styled.div`
  position: relative;
  background-image: repeating-linear-gradient(
    45deg,
    rgba(6, 40, 68, 1),
    rgba(16, 60, 99, 1) 8px
  );
  height: 100px;
  width: 100%;
`;
const RedBar = styled.div`
  position: relative;
  top: 0;
  background-color: rgb(239, 57, 65);
  height: 20px;
  width: 100%;
`;
const Title = styled.h1`
  text-align: center;
  color: rgb(239, 57, 65);
`;

function Navbar(props) {
  return (
    <NavbarWrapper>
      <BlueBar>
        <Title>Lehi Fire</Title>
        <RedBar></RedBar>
      </BlueBar>
    </NavbarWrapper>
  );
}

export default Navbar;
