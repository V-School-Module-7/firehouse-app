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

  :hover {
    cursor: pointer;
  }
`;
const ButtonIcon = styled.img`
  justify-self: center;
  height: 80px
  width: auto;
`;

const ButtonText = styled.h2`
  color: #ffffff;
  text-align: center;
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
    <ButtonWrapper>
      <ButtonIcon src={icon} />
      <ButtonText>{props.text}</ButtonText>
    </ButtonWrapper>
  );
}
