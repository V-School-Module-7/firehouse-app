import React from "react";
import styled from "styled-components";

import { Button, ButtonAlt } from "../components/styledComponents";
import { Link } from "react-router-dom";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const WillLaterBeAnImage = styled.div`
  background-color: rgb(176, 176, 176);
  width: 245px;
  height: 245px;
  margin: 80px auto 0 auto;
`;

const WelcomeMessage = styled.h1`
  text-indent: 32px;
  width: 245px;
  margin: 30px auto 70px auto;
`;

const SignUpBtn = styled(ButtonAlt)``;
const ButtonContainer = styled.div`
  margin: auto;
  margin-bottom: 100px;
`;
const SignInBtn = styled(Button)`
  margin-top: 24px;
`;
const ButtonLink = styled(Link)`
  margin: 8px auto 8px auto;
  text-decoration: none;
  width: 100%;
`;

export default function Login(props) {
  return (
    <LoginContainer>
      <WillLaterBeAnImage />
      <WelcomeMessage>Welcome to Fire-house App</WelcomeMessage>
      <ButtonContainer>
        <ButtonLink to="/login/signup">
          <SignUpBtn>Sign Up</SignUpBtn>
        </ButtonLink>
        <ButtonLink to="/login/signin">
          <SignInBtn>Sign In</SignInBtn>
        </ButtonLink>
      </ButtonContainer>
    </LoginContainer>
  );
}
