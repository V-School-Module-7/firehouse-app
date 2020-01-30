import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  justify-self: center;
  background-color: rgb(176, 176, 176);
  border-radius: 5px;
  ${props =>
      props.type === "square"
        ? // button type 'square'
          `
          width: 125px;
          height: 125px;
        `
        : props.type === "outline"
        ? // button type outline
          `
          width: 125px;
          height: 75px;
        `
        : // button type normal
          `
          width: 125px;
          height: 75px;

        `}
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
      {props.type == "square" ? (
        <ButtonIcon src={props.icon} alt={props.text + "."} />
      ) : null}
      <ButtonText>{props.text}</ButtonText>
    </ButtonWrapper>
  );
}
