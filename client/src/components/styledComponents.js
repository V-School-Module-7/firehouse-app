import styled from "styled-components";

// Button normal
export const Button = styled.button`
  background: rgb(176, 176, 176);
  color: #ffffff;
  height: 35px;
  width: 125px;
  border-radius: 5px;
  margin: 8px;
`;

// button outlined
export const ButtonAlt = styled.button`
  background: #ffffff;
  color: rgb(176, 176, 176);
  border: 1px solid rgb(176, 176, 176);
  height: 35px;
  width: 125px;
  border-radius: 5px;
  margin: 8px;
`;

// text input normal
export const Input = styled.input`
  border-radius: 5px;
  padding: 8px;
  margin: 8px;
`;

// text input only underline
export const InputAlt = styled.input`
  border-radius: 5px;
  padding: 8px;
  margin: 8px;
  border-right: none;
  border-top: none;
  border-left: none;
  border-radius: 0;
`;
