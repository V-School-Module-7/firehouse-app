import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  justify-self: center;
  background-color: rgb(176, 176, 176);
  border-radius: 5px;
  width: 154px;
  height: 154px;

  :hover {
    cursor: pointer;
  }
`;
const ButtonIcon = styled.img``;

const ButtonText = styled.h2`
  color: #ffffff;
  text-align: center;
`;

export default function Button(props) {
  return (
    <ButtonWrapper>
      <ButtonIcon src={props.icon} />
      <ButtonText>{props.text}</ButtonText>
    </ButtonWrapper>
  );
}
