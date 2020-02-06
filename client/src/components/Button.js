import React from "react";
import styled from "styled-components";
import apparatusIcon from "../assets/apparatus.svg";
import drugsIcon from "../assets/drugs.svg";
import feedbackIcon from "../assets/feedback.svg";
import fireIcon from "../assets/fire.svg";
import hospitalIcon from "../assets/hospital.svg";
import hydraulicsIcon from "../assets/hydraulics.svg";
import medicalIcon from "../assets/medical.svg";
import protocolsIcon from "../assets/protocols.svg";
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
  background-color: rgb(176, 176, 176);
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
  height: 80px
  width: auto;
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
`;

export default function Button(props) {
  let icon;
  if (props.text === "Protocols") {
    icon = protocolsIcon;
  } else if (props.text === "Fire") {
    icon = fireIcon;
  } else if (props.text === "Drugs") {
    icon = drugsIcon;
  } else if (props.text === "Medical") {
    icon = medicalIcon;
  } else if (props.text === "Hospital") {
    icon = hospitalIcon;
  } else if (props.text === "Apparatus") {
    icon = apparatusIcon;
  } else if (props.text === "Hydraulics") {
    icon = hydraulicsIcon;
  } else if (props.text === "Feedback") {
    icon = feedbackIcon;
  }
  return (
    <ButtonLink to={props.path}>
      <ButtonWrapper>
        <ButtonIcon src={icon} />
        <ButtonText>{props.text}</ButtonText>
      </ButtonWrapper>
    </ButtonLink>
  );
}
