import React from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";

import apparatusIcon from "../assets/apparatus.svg";
import drugsIcon from "../assets/drugs.svg";
import feedbackIcon from "../assets/feedback.svg";
import fireIcon from "../assets/fire.svg";
import hospitalIcon from "../assets/hospital.svg";
import hydraulicsIcon from "../assets/hydraulics.svg";
import medicalIcon from "../assets/medical.svg";
import protocolsIcon from "../assets/protocols.svg";

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
    { name: "Protocols", path: "/protocols", icon: protocolsIcon },
    { name: "Fire", path: "/fire", icon: fireIcon },
    { name: "Drugs", path: "/drugs", icon: drugsIcon },
    { name: "Medical", path: "/medical", icon: medicalIcon },
    { name: "Hospital", path: "/hospital", icon: hospitalIcon },
    { name: "Apparatus", path: "/apparatus", icon: apparatusIcon },
    { name: "Hydraulics", path: "/hydraulics", icon: hydraulicsIcon },
    { name: "Feedback", path: "/feedback", icon: feedbackIcon }
  ];
  const displayButtons = buttonInfo.map((buttonInfo, index) => (
    <Button
      key={buttonInfo.name + index}
      text={buttonInfo.name}
      path={buttonInfo.path}
      icon={buttonInfo.icon}
    />
  ));
  return (
    <HomepageWrapper>
      <SearchBarHomepage />
      <ButtonsContainer>{displayButtons}</ButtonsContainer>
    </HomepageWrapper>
  );
}

export default Homepage;
