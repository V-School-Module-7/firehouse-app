import React from "react";
import styled from "styled-components";

import { Button, ButtonAlt } from "../components/styledComponents";
import { Link } from "react-router-dom";

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

const SignUpBtn = styled(ButtonAlt)``;

const SignInBtn = styled(Button)``;
const ButtonLink = styled(Link)`
  grid-column: 2 / 6;
  margin: auto;
`;

export default function Login(props) {
  return (
    <LoginContainer>
      <WillLaterBeAnImage />
      <WelcomeMessage>Welcome to Firehouse App</WelcomeMessage>
      <ButtonLink to="/login/signup">
        <SignUpBtn>Sign Up</SignUpBtn>
      </ButtonLink>
      <ButtonLink to="/login/signin">
        <SignInBtn>Sign In</SignInBtn>
      </ButtonLink>
    </LoginContainer>
  );
}
