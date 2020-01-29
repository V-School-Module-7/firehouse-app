import React from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";

const HomepageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
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
      <SearchBar />
      <ButtonsContainer>{displayButtons}</ButtonsContainer>
    </HomepageWrapper>
  );
}

export default Homepage;
