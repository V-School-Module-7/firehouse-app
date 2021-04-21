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
  width: 95vw;
  height: 120px;
  position: relative;

  :hover {
    cursor: pointer;
  }
`;

const ButtonText = styled.div`
  height: auto;
  width: auto;
  font-weight: 600;
  font-size: 32px;
  line-height: 32px;
  text-align: center;
  margin: auto;
  color: #EFFF19;
`;

export default function Button2(props) {
  return (
    <ButtonLink to={props.path}>
      <ButtonWrapper>
        <ButtonText>{props.text}</ButtonText>
      </ButtonWrapper>
    </ButtonLink>
  );
}