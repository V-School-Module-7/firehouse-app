import React from "react";
import styled from "styled-components";

const DocumentCardWrapper = styled.div``;

export default function DocumentCard(props) {
  return (
    <DocumentCardWrapper>
      <div>{props.documentInfo.link}</div>
      <div>{props.documentInfo.title}</div>
    </DocumentCardWrapper>
  );
}
