import React from "react";
import styled from "styled-components";
import LehiFireLogoImg from "../assets/lehi-fire-shield-logo.png";
import Button from "../components/Button";

const HomepageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LehiFireLogo = styled.img`
  grid-column: 1 span 2;
  margin: 0 auto 0 auto;
  max-width: 400px;
  width: 95%;
  height: auto;
`;
const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 60px;
  grid-gap: 8px;
  width: 100vw;
  padding: 8px;
  margin-top: 16px;
`;

function Homepage(props) {
  const buttonNames = [
    "Protocols",
    "Fire",
    "Drugs",
    "Medical",
    "Hospital",
    "Apparatus",
    "Hydraulics",
    "Feedback"
  ];
  const displayButtons = buttonNames.map(name => <Button text={name} />);
  return (
    <HomepageWrapper>
      <LehiFireLogo src={LehiFireLogoImg} alt="Lehi Fire Department Logo." />
      <ButtonsContainer>{displayButtons}</ButtonsContainer>
    </HomepageWrapper>
  );
}

export default Homepage;
