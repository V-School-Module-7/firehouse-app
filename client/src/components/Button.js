import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonLink = styled(Link)`
  text-decoration: none;
`;
const ButtonWrapper = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: blue;
  border-radius: 5px;
  width: 154px;
  height: 154px;
  position: relative;

  :hover {
    cursor: pointer;
  }
`;
const ButtonIcon = styled.img`
  margin: auto;
  margin-bottom: 0px;
  justify-self: center;
  align-self: center;
  height: 80px;
  width: auto;
  color: #EFFF19;
`;

const ButtonText = styled.div`
  height: 32px;
  width: 120px;
  color: #ffffff;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  margin: auto;
  color: #EFFF19;
`;

export default function Button(props) {
  return (
    <ButtonLink to={props.path}>
      <ButtonWrapper>
        <ButtonIcon src={props.icon} />
        <ButtonText>{props.text}</ButtonText>
      </ButtonWrapper>
    </ButtonLink>
  );
}
