import React from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";

const ProtocolsWrapper = styled.div``;
const SearchBarProtocols = styled(SearchBar)``;
const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 154px 154px;
  grid-auto-rows: auto;
  grid-gap: 20px;
  width: 100vw;
  margin: 16px auto 0px auto;
  justify-content: center;
`;

function Protocols(props) {
  const buttonInfo = [
    { name: "General", path: "/protocols/general", icon: null },
    { name: "Cardiac", path: "/protocols/cardiac", icon: null },
    { name: "Medical", path: "/protocols/medical", icon: null },
    { name: "Trauma", path: "/protocols/trauma", icon: null }
  ];
  const displayButtons = buttonInfo.map((buttonInfo, index) => (
    <Button
      key={buttonInfo + index}
      text={buttonInfo.name}
      path={buttonInfo.path}
    />
  ));
  return (
    <ProtocolsWrapper>
      <SearchBarProtocols />
      <ButtonsContainer>{displayButtons}</ButtonsContainer>
    </ProtocolsWrapper>
  );
}

export default Protocols;
