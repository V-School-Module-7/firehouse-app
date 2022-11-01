import React, {useContext} from 'react'
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
import { FireContext } from '../context/FireProvider';
import EnterPic from '../assets/veis/Enter-pic.jpg'
import IsolatePic from '../assets/veis/Isolate-pic.jpg'
import SearchPic from '../assets/veis/Search-pic.jpg'
import VentPic from '../assets/veis/Vent-pic.jpg'

const Type1Wrapper = styled.div``
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

`;

const DataWrapper = styled.div`
font-family: 'Roboto';
font-size: 18px;
text-align: center;
margin-bottom: 5px;

`

const ImageWrapper3 = styled.div`
margin: 100px 8px 8px;
display: flex;
flex-direction: column;
padding: 8px;
`
export default function VEIS() {

    const {fireData} = useContext(FireContext)

    return (
        <Type1Wrapper>
            <SearchBar /> 
            <SectionWrapper>
                <TitleWrapper>
                    {fireData.veisData.info[0].name}
                </TitleWrapper>
            </SectionWrapper>
            <SectionWrapper style={{paddingBottom: '85px'}}>
                <TitleWrapper>
                    {fireData.veisData.info[0].summary.title}
                </TitleWrapper>
                    {fireData.veisData.info[0].summary.data.map(summaryData => 
                        <DataWrapper>{summaryData}</DataWrapper>
                    )}
            </SectionWrapper>
            <SectionWrapper>
                <TitleWrapper>
                    {fireData.veisData.info[0].vent.title}
                </TitleWrapper>
                {fireData.veisData.info[0].vent.data.map(ventData => 
                        <DataWrapper>{ventData}</DataWrapper>
                    )}
                     <ImageWrapper3>
                        <img src={VentPic} alt='' />
                    </ImageWrapper3>
            </SectionWrapper>
            <SectionWrapper>
                <TitleWrapper>
                    {fireData.veisData.info[0].enter.title}
                </TitleWrapper>
                {fireData.veisData.info[0].enter.data.map(enterData => 
                        <DataWrapper>{enterData}</DataWrapper>
                    )}
                    <ImageWrapper3>
                        <img src={EnterPic} alt='' />
                    </ImageWrapper3>
            </SectionWrapper>
            <SectionWrapper>
                <TitleWrapper>
                    {fireData.veisData.info[0].isolate.title}
                </TitleWrapper>
                {fireData.veisData.info[0].isolate.data.map(isolateData => 
                        <DataWrapper>{isolateData}</DataWrapper>
                    )}
                     <ImageWrapper3>
                        <img src={IsolatePic} alt='' />
                    </ImageWrapper3>
            </SectionWrapper>
            <SectionWrapper>
                <TitleWrapper>
                    {fireData.veisData.info[0].search.title}
                </TitleWrapper>
                {fireData.veisData.info[0].search.data.map(searchData => 
                        <DataWrapper>{searchData}</DataWrapper>
                    )}
                     <ImageWrapper3>
                        <img src={SearchPic} alt='' />
                    </ImageWrapper3>
            </SectionWrapper>
        </Type1Wrapper>
    )
}