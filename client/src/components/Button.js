import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  justify-self: center;
  background-color: rgb(176, 176, 176);
  border-radius: 5px;
  width: 125px;
  height: 125px;

  :hover {
    cursor: pointer;
  }
`;
const ButtonText = styled.h2`
  color: #ffffff;
  text-align: center;
`;

export default function Button(props) {
  return (
    <ButtonWrapper>
      <ButtonText>{props.text}</ButtonText>
    </ButtonWrapper>
  );
}
