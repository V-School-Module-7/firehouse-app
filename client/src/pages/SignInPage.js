import React from "react";
import styled from "styled-components";

import { InputAlt, Button } from "../components/styledComponents";

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

const EmailInput = styled(InputAlt)`
  grid-column: 2 / 6;
  margin: auto;
  text-align: center;
`;
const PasswordInput = styled(InputAlt)`
  grid-column: 2 / 6;
  margin: auto;
  text-align: center;
`;

const SignInMessage = styled.h1`
  grid-column: 2 / 6;
  margin: auto;
  text-align: center;
`;

const SignInBtn = styled(Button)`
  grid-column: 2 / 6;
  margin: auto;
`;

export default function SignIn(props) {
  return (
    <SignInContainer>
      <WillLaterBeAnImage />
      <SignInMessage>Enter you information to get started</SignInMessage>
      <EmailInput type="text" placeholder="Email" />
      <PasswordInput type="password" placeholder="Password" />
      <SignInBtn>Sign In</SignInBtn>
    </SignInContainer>
  );
}
