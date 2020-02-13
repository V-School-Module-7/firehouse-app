import React from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";

const ProtocolsWrapper = styled.div``;
const SearchBarProtocols = styled(SearchBar)``;
const ButtonsContainer = styled.div``;

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
