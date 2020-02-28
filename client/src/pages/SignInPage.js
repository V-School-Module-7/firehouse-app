import React from "react";
import styled from "styled-components";

import LoginForm from "../components/LoginForm";

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100vw;
`;

const WillLaterBeAnImage = styled.div`
  background-color: rgb(176, 176, 176);
  width: 245px;
  height: 245px;
  margin: auto;
`;

const LoginFormStyled = styled(LoginForm)`
  margin: 40px auto 100px auto;
  max-width: 245px;
`;

export default function SignIn(props) {
  return (
    <SignInContainer>
      <WillLaterBeAnImage />
      <LoginFormStyled type="SignIn" />
    </SignInContainer>
  );
}
