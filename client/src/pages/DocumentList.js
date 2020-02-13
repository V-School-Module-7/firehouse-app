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
  const { protocols } = useContext(Context);
  const displayDocuments = documents.map((document, index) => (
    <DocumentCard key={index} documentInfo={document} />
  ));

  console.log("youve reached the document list page");
  return <DocumentListWrapper>{displayDocuments}</DocumentListWrapper>;
}
