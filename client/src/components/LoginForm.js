import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../context/ContextProvider";
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
  const { login } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleLoginSubmit(e) {
    e.preventDefault();
    login(email, password);
  }
  return props.type === "SignIn" ? (
    <LoginFormWrapper onSubmit={e => handleLoginSubmit(e)}>
      <SignInEmailInput
        type="text"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <SignInPasswordInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <SignInBtn onClick={e => handleLoginSubmit(e)}>Sign In</SignInBtn>
    </LoginFormWrapper>
  ) : (
    <LoginFormWrapper onSubmit={e => handleLoginSubmit(e)}>
      <FirstNameInput
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        required
      />
      <LastNameInput
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        required
      />
      <EmailInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <PasswordInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <ConfirmInput
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        required
      />
      <SignUpBtn onClick={e => handleLoginSubmit(e)}>Sign Up</SignUpBtn>
    </LoginFormWrapper>
  );
}

export default LoginForm;
