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
  grid-template-columns: 154px 154px;
  grid-auto-rows: auto;
  grid-gap: 20px;
  width: 100vw;
  margin: 16px auto 0px auto;
  justify-content: center;
`;
const SearchBarHomepage = styled(SearchBar)`
  margin: 25px auto 25px auto;
`;

function Homepage(props) {
  const buttonInfo = [
    { name: "Protocols", path: "/protocols" },
    { name: "Fire", path: "/fire" },
    { name: "Drugs", path: "/drugs" },
    { name: "Medical", path: "/medical" },
    { name: "Hospital", path: "/hospital" },
    { name: "Apparatus", path: "/apparatus" },
    { name: "Hydraulics", path: "/hydraulics" },
    { name: "Feedback", path: "/feedback" }
  ];
  const displayButtons = buttonInfo.map(buttonInfo => (
    <Button text={buttonInfo.name} path={buttonInfo.path} />
  ));
  return (
    <HomepageWrapper>
      <SearchBarHomepage />
      <ButtonsContainer>{displayButtons}</ButtonsContainer>
    </HomepageWrapper>
  );
}

export default Homepage;
