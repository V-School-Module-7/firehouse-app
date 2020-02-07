import React from "react";
import styled from "styled-components";

import { Input, Button } from "../components/styledComponents";
import LoginForm from "../components/LoginForm";

const SignUpContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: auto;
  grid-gap: 9px;
  padding: 15px;
  width: 100vw;
`;

const SignUpMessage = styled.h1`
  grid-column: 2 / 6;
  margin: auto;
  text-align: center;
`;

const LoginFormStyled = styled(LoginForm)`
  grid-column: 2 / 6;
  margin: auto;
`;

export default function SignUp(props) {
  return (
    <SignUpContainer>
      <SignUpMessage>Enter your information to get started</SignUpMessage>
      <LoginFormStyled type="SignUp" />
    </SignUpContainer>
  );
}
