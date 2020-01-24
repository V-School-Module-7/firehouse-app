import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  justify-self: center;
  background-image: repeating-linear-gradient(
    45deg,
    rgba(6, 40, 68, 1),
    rgba(16, 60, 99, 1) 8px
  );
  border-radius: 5px;
  max-width: 200px;
  width: 100%;

  :hover {
    cursor: pointer;
  }
`;
const ButtonText = styled.h1`
  color: rgb(239, 57, 65);
  text-align: center;

  :hover {
    cursor: pointer;
  }
`;

export default function Button(props) {
  return (
    <ButtonWrapper>
      <ButtonText>{props.text}</ButtonText>
    </ButtonWrapper>
  );
}
