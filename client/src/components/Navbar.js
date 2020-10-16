import React, {useContext} from "react";
import { withRouter } from "react-router-dom";
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
  justify-content: space-between;
  background-color: blue;
`;
const Title = styled.h1`
  text-align: center;
  color: #EFFF19;
  font-size: 34px;

  :hover{
    cursor: pointer;
  }
`;

const Button = styled.div`
  font-size: 1em;
  margin: 1em;
  color: #EFFF19;
  padding: 0.5em 1em 1em 1em;
  border-radius: 5px;
  border: 2px solid yellow;

  :hover {
    cursor: pointer;
  }
`;

function Navbar(props) {
  const { signOut } = useContext(UserContext)

  return (
    <NavbarWrapper>
    <Button onClick={()=> props.history.go(0)}
      /* onClick={()=> props.history.push("/")} */
      >Back
      </Button>
      <Title onClick={()=> props.history.push("/")}>Lehi Fire</Title>
      <Button
      onClick={signOut}
      >Sign Out
      </Button>
    </NavbarWrapper>
  );
}

export default withRouter(Navbar);
