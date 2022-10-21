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
  width: 1400px;
  height: 154px;
  position: relative;

  :hover {
    cursor: pointer;
  }
`;

// had to apply white-space and change width from 120px to 540px;
const ButtonText = styled.div`
  white-space: nowrap;
  height: 32px;
  width: 540px;  
  color: #ffffff;
  font-weight: bold;
  font-size: 40px;
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
