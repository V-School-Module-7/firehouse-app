import React from "react";
import styled from "styled-components";

const DocumentCardWrapper = styled.div`
  padding: 16px;
  padding-left: 12px;
  margin: 20px;
  border-radius: 6px;
  border: 2px solid #979797;
  `;
const DocumentLink = styled.a``;

export default function DocumentCard(props) {
  return (
    <DocumentCardWrapper>
      <div>
        <DocumentLink href={props.documentInfo.fileUrl}
        target="__blank" rel="no opener">
          {props.documentInfo.title}
        </DocumentLink>
      </div>
    </DocumentCardWrapper>
  );
}
