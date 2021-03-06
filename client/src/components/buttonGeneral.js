import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonLink = styled(Link)`
    text-decoration: none;
`;

const ButtonWrapper = styled.div`
    justify-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background-color: blue;
    border-radius: 5px;
    width: 1400px;
    height: 120px;
    position: relative;

    :hover {
        cursor: pointer;
    }
`;

const ButtonText = styled.div`
    height: 32px;
    color: #ffffff;
    font-weight: bold;
    font-size: 30px;
    line-height: 32px;
    text-align: center;
    margin: auto;
    color: #EFFF19;
`;

export default function ButtonGeneral(props) {
    return (
        <ButtonLink to={props.href}>
            <ButtonWrapper>
                <ButtonText>{props.text}</ButtonText>
            </ButtonWrapper>
        </ButtonLink>
    );
}