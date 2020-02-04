import React from "react";
import styled from "styled-components";

import { Button, ButtonAlt } from "../components/styledComponents";

const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: auto;
  grid-gap: 9px;
  padding: 15px;
  width: 100vw;
`;

const WillLaterBeAnImage = styled.div`
  background-color: rgb(176, 176, 176);
  width: 200px;
  height: 200px;
  grid-column: 2 / 6;
  margin: auto;
`;

const WelcomeMessage = styled.h1`
  grid-column: 2 / 6;
  margin: auto;
  text-align: center;
`;

const SignUpBtn = styled(ButtonAlt)`
  grid-column: 2 / 6;
  margin: auto;
`;

const SignInBtn = styled(Button)`
  grid-column: 2 / 6;
  margin: auto;
`;

export default function Login(props) {
  return (
    <LoginContainer>
      <WillLaterBeAnImage />
      <WelcomeMessage>Welcome to Firehouse App</WelcomeMessage>
      <SignUpBtn>Sign Up</SignUpBtn>
      <SignInBtn>Sign In</SignInBtn>
    </LoginContainer>
  );
}
