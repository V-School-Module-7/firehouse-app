import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MedCardWrapper = styled.div`
  padding: 16px;
  padding-left: 12px;
  margin: 20px;
  border-radius: 6px;
  border: 2px solid #979797;
`;

// opacity: ${props => (props.open ? "1" : "0")}
// max-height: ${props => (props.open ? "100%" : "0")};
// padding: ${props => (props.open ? "15px" : "0 15px")};
export const Details = styled.div`
  border: 1px solid gray;
  border-top: none;
  transition: all 0.3s ease-out;
  overflow: hidden;

  p {
    margin: 0;
  }
`;


export default function MedCard(props) {
  return (
      <>
    <MedCardWrapper >
    <Link
    to={{
        pathname:`/medical/${props.medicalInfo._id}`,
        state: props.medicalInfo
        }}>
            {/* {props.medicalInfo.conditions} */}
            <div>
          {props.medicalInfo.type}{/* medication type */}
            </div>
            </Link>
    </MedCardWrapper>

    </>
  );
}
