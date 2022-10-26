import React, {useContext} from 'react'
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
import { FireContext } from '../context/FireProvider';
import COLevelsPic from '../assets/coLevels/CO-Levels-pic.jpg'

const COLevelsWrapper = styled.div``

const SectionWrapper = styled.div`
background: #FFFFFF;
box-shadow: 2px 4px 4px #BEC8D5;
border-radius: 10px;
margin: 0px 30px 20px;
display: flex;
flex-direction: column;
padding: 8px;
color: #474646;

`;

const TitleWrapper = styled.div`
font-family: 'Roboto';
font-weight: bold;
font-size: 24px;
line-height: 28px;
text-align: center;
color: #131415;

`

const ImageWrapper4 = styled.div`
margin: 25px 6px;
display: flex;
flex-direction: column;

`
export default function COLevels() {
    const {fireData} = useContext(FireContext)

    return (
        <COLevelsWrapper>
            <SearchBar /> 
            <SectionWrapper>
                <TitleWrapper>
                    {fireData.coLevelsData.info.map(co => co.name)}
                </TitleWrapper>
            </SectionWrapper>
            <SectionWrapper>
                <ImageWrapper4>
                    <img src={COLevelsPic} alt='' />
                </ImageWrapper4>
            </SectionWrapper>
        </COLevelsWrapper>
    )
}