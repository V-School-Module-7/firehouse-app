import React, {useContext} from "react";
import styled from "styled-components";
import { UserContext } from "../context/UserProvider";

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

const Button = styled.div`
  font-size: 1em;
  margin: 1em;
  color: #ffffff;
  padding: 0.25em 1em;
  border-radius: 5px;
  border: 2px solid white;
`;

function Navbar(props) {
  const { signOut } = useContext(UserContext)

  return (
    <NavbarWrapper>
      <Title>Lehi Fire</Title>
      <Button
      onClick={signOut}
      >Sign Out
      </Button>
    </NavbarWrapper>
  );
}

export default Navbar;
