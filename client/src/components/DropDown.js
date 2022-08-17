import React, { useContext } from "react";
import styled from "styled-components";
import { FireContext } from "../context/FireProvider";

const DropDownWrapper = styled.div`
  background: #FFFFFF;
  box-shadow: 2px 4px 4px #BEC8D5;
  border-radius: 10px;
  margin: 0px 30px 20px;
  // max-width: 95vw;
  display: flex;
  justify-content: space-between;
  padding: 8px;
    :hover {
      cursor: pointer;
    }
`;

const DropDownTitle = styled.div`
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #474646;
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  color: #474646;
`

// export const AnchorButton = styled(Anchor)``

export default function DropDown(props) {
  const { toggle, fireData } = useContext(FireContext)
  const { index, name } = props

  return (
    <div>
      <DropDownWrapper onClick={() => toggle(index)}>
        <DropDownTitle>
          {name}
        </DropDownTitle>
        {fireData.sizeUpData.info[index].toggled ?
          <Icon><i className="fa-solid fa-caret-up"></i></Icon>
          :
          <Icon><i className="fa-solid fa-caret-down"></i></Icon>
        }
      </DropDownWrapper>
    </div>
  );
}