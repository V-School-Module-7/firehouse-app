import React from "react";
import styled from "styled-components";

const DocumentCardWrapper = styled.div``;
const DocumentLink = styled.a``;

export default function DocumentCard(props) {
  return (
    <DocumentCardWrapper>
      <div>
        <DocumentLink href={props.documentInfo.fileUrl}>
          {props.documentInfo.title}
        </DocumentLink>
      </div>
    </DocumentCardWrapper>
  );
}
