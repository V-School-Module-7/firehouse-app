import styled from "styled-components";

// Button normal
export const Button = styled.div`
  background: #b0b0b0;
  color: #ffffff;
  height: 35px;
  width: 100%;
  min-width: 227px;
  min-height: 50px;
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.96px;
  line-height: 26px;
  padding: 13px;

  :hover {
    cursor: pointer;
  }
`;

// button outlined
export const ButtonAlt = styled.div`
  background: #ffffff;
  color: #b0b0b0;
  border: 2px solid #b0b0b0;
  height: 35px;
  width: 100%;
  min-width: 227px;
  min-height: 50px;
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.96px;
  line-height: 26px;
  padding: 13px;

  :hover {
    cursor: pointer;
  }
`;
//accordion

export const Details = styled.div`
  border: 1px solid gray;
  border-top: none;
  transition: all 0.3s ease-out;
  overflow: hidden;

  p {
    margin: 0;
  }
`;

// text input normal
export const Input = styled.input`
  border-radius: 5px;
  padding: 8px;
  margin: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #b0b0b0;
  letter-spacing: 0.77px;
  line-height: 21px;
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
  color: #b0b0b0;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.77px;
  line-height: 21px;
`;
