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
    console.log(props.conditions)
  return (
      <>
    <MedCardWrapper >
            <div>
          {props.medicalInfo.type}{/* medication type */}
            </div>

    { props.conditions && props.conditions.map (condition => <Link
    to={{
        pathname:`/medical/${condition.type}`,
        state: condition
        }}>
            <p>
        {condition.type}
            </p>
        </Link>
    )}
    </MedCardWrapper>
    </>
  );
}
