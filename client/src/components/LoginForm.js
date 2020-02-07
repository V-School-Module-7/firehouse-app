import React from "react";
import styled from "styled-components";

import { Input, InputAlt, Button } from "./styledComponents";

const LoginFormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: auto;
  grid-gap: 9px;
  padding: 15px;
  width: 100vw;
`;
const SignInEmailInput = styled(InputAlt)`
  grid-column: 2 / 6;
  margin: auto;
  text-align: center;
`;
const SignInPasswordInput = styled(InputAlt)`
  grid-column: 2 / 6;
  margin: auto;
  text-align: center;
`;
const SignInBtn = styled(Button)`
  grid-column: 2 / 6;
  margin: auto;
`;
const FirstNameInput = styled(Input)`
  grid-column: 2 / 6;
  margin: auto;
  text-align: center;
`;
const LastNameInput = styled(Input)`
  grid-column: 2 / 6;
  margin: auto;
  text-align: center;
`;
const EmailInput = styled(Input)`
  grid-column: 2 / 6;
  margin: auto;
  text-align: center;
`;
const PasswordInput = styled(Input)`
  grid-column: 2 / 6;
  margin: auto;
  text-align: center;
`;
const ConfirmInput = styled(Input)`
  grid-column: 2 / 6;
  margin: auto;
  text-align: center;
`;

const SignUpBtn = styled(Button)`
  grid-column: 2 / 6;
  margin: auto;
`;

function LoginForm(props) {
  return props.type === "SignIn" ? (
    <LoginFormWrapper>
      <SignInEmailInput type="email" placeholder="Email" />
      <SignInPasswordInput type="password" placeholder="Password" />
      <SignInBtn>Sign In</SignInBtn>
    </LoginFormWrapper>
  ) : (
    <LoginFormWrapper>
      <FirstNameInput type="text" placeholder="First Name" />
      <LastNameInput type="text" placeholder="Last Name" />
      <EmailInput type="email" placeholder="Email" />
      <PasswordInput type="password" placeholder="Password" />
      <ConfirmInput type="password" placeholder="Confirm Password" />
      <SignUpBtn>Sign Up</SignUpBtn>
    </LoginFormWrapper>
  );
}

export default LoginForm;
