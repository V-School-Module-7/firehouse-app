import React from "react";
import styled from "styled-components";

import LoginForm from "../components/LoginForm";

const SignInContainer = styled.div`
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

const SignInMessage = styled.h1`
  grid-column: 2 / 6;
  margin: auto;
  text-align: center;
`;
const LoginFormStyled = styled(LoginForm)`
  grid-column: 2 / 6;
  margin: auto;
  width: 245px;
`;

export default function SignIn(props) {
  return (
    <SignInContainer>
      <WillLaterBeAnImage />
      <SignInMessage>Enter you information to get started</SignInMessage>
      <LoginFormStyled type="SignIn" />
    </SignInContainer>
  );
}
