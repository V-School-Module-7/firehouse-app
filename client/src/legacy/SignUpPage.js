import React from "react";
import styled from "styled-components";

import LoginForm from "../components/LoginForm";

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const SignUpMessage = styled.h1`
  width: 245px;
  margin: auto;
  font-size: 20px;
  line-height: 26px;
  font-weight: bold;
`;

const LoginFormStyled = styled(LoginForm)`
  margin: auto;
  width: 245px;
`;

export default function SignUp(props) {
  return (
    <SignUpContainer>
      <SignUpMessage>Enter your information to get started</SignUpMessage>
      <LoginFormStyled type="SignUp" />
    </SignUpContainer>
  );
}
