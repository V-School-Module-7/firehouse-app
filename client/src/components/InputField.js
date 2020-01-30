import React from "react";
import styled from "styled-components";

const InputContainer = styled.div``;
const InputType1 = styled.input`
  border: none;
  box-shadow: none;
  padding: 8px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.textPrimary};
`;
const InputType2 = styled.input``;

export default function InputField(props) {
  return props.typle === "type1" ? (
    <InputType1 type="text" placeholder={props.placeholder} />
  ) : (
    <InputType2 type="text" placeholder={props.placeholder} />
  );
}
