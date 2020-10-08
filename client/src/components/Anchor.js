import React from "react";
import styled from "styled-components";


export const Anchor = styled.a`
text-decoration: none;
justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: blue;
  border-radius: 5px;
  width:1400px;
  height: 155px;
  position: relative;

  :hover {
    cursor: pointer;
  }
`



// const ButtonWrapper = styled.div`
//   justify-self: center;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-content: center;
//   background-color: blue;
//   border-radius: 5px;
//   width:1400px;
//   height: 155px;
//   position: relative;

//   :hover {
//     cursor: pointer;
//   }
// `;

const ButtonText = styled.div`
  height: 32px;
  color: #ffffff;
  font-weight: bold;
  font-size: 30px;
  line-height: 15px;
  margin: auto;
  color: #EFFF19;
`;

export default function AnchorButton(props) {
  return (
    <Anchor href={props.href}
    target={props.target}>
        <ButtonText>{props.children}</ButtonText>
    </Anchor>
  );
}
