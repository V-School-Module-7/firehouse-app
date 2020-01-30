import React from "react";
import styled from "styled-components";

import InputField from "../components/InputField";
import Button from "../components/Button";

const LoginContainer = styled.div``;

export default function Login(props) {
  return (
    <LoginContainer>
      <h1>This is the login page!</h1>
      <InputField style="type1" placeholder="type1" />
      <InputField style="type2" placeholder="type2" />
      <Button type="square" />
      <Button type="outline" />
      <Button type="normal" />
    </LoginContainer>
  );
}
