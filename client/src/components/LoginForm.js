import React from "react";
import styled from "styled-components";

import { Input, InputAlt, Button } from "./styledComponents";

const LoginFormWrapper = styled.form`
  margin: auto;
`;
const SignInEmailInput = styled(InputAlt)`
  margin: 8px auto;
  width: 100%;
`;
const SignInPasswordInput = styled(InputAlt)`
  margin: 8px auto;
  width: 100%;
`;
const SignInBtn = styled(Button)`
  margin: 8px auto;
  width: 100%;
`;
const FirstNameInput = styled(Input)`
  margin: 8px auto;
  width: 100%;
`;
const LastNameInput = styled(Input)`
  margin: 8px auto;
  width: 100%;
`;
const EmailInput = styled(Input)`
  margin: 8px auto;
  width: 100%;
`;
const PasswordInput = styled(Input)`
  margin: 8px auto;
  width: 100%;
`;
const ConfirmInput = styled(Input)`
  margin: 8px auto;
  width: 100%;
`;
const SignUpBtn = styled(Button)`
  margin: 8px auto;
  width: 100%;
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
