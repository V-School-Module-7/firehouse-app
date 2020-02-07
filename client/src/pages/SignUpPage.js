import React from "react";
import styled from "styled-components";

import { Input, Button } from "../components/styledComponents";

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

export default function SignUp(props) {
  return (
    <SignUpContainer>
      <SignUpMessage>Enter your information to get started</SignUpMessage>
      <FirstNameInput type="text" placeholder="First Name" />
      <LastNameInput type="text" placeholder="Last Name" />
      <EmailInput type="text" placeholder="Email" />
      <PasswordInput type="password" placeholder="Password" />
      <ConfirmInput type="password" placeholder="Confirm Password" />
      <SignUpBtn>Sign Up</SignUpBtn>
    </SignUpContainer>
  );
}
