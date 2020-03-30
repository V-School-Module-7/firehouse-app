import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import DocumentCard from "../components/DocumentCard";
import { ProtocolContext } from "../context/ProtocolProvider";

const DocumentListWrapper = styled.div``;

export default function DocumentList(props) {
  const { protocolsToDisplay, getProtocolsByCategory } = useContext(ProtocolContext);

  let currentCategory = props.match.params.category;

  useEffect(() => getProtocolsByCategory(currentCategory), []);

  const displayProtocols = protocolsToDisplay.map((protocol, index) => (
    <DocumentCard key={index} documentInfo={protocol} />
  ));

  return <DocumentListWrapper>{displayProtocols}</DocumentListWrapper>;
}
