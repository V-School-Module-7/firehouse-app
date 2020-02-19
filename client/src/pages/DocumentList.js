import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import DocumentCard from "../components/DocumentCard";
import { Context } from "../context/ContextProvider";

const DocumentListWrapper = styled.div``;

const documents = [
  { link: "imalink", title: "title1" },
  { link: "imalink2", title: "title2" }
];

export default function DocumentList(props) {
  const { protocolsToDisplay, getProtocolsByCategory } = useContext(Context);

  let currentCategory = props.match.params.category;

  console.log("currentCategory", currentCategory);
  console.log("protocolsToDisplay", protocolsToDisplay);

  useEffect(() => getProtocolsByCategory(currentCategory), []);

  const displayProtocols = protocolsToDisplay.map((protocol, index) => (
    <DocumentCard key={index} documentInfo={protocol} />
  ));

  console.log("protocolsToDisplay", protocolsToDisplay);

  return <DocumentListWrapper>{displayProtocols}</DocumentListWrapper>;
}
