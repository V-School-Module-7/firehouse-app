import React, { useContext } from "react"
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
import DropDown from "../components/DropDown";
import { FireContext } from "../context/FireProvider";

// const SearchBarSizeUp = styled(SearchBar);
const DropDownInfoWrapper = styled.div`
  background: #FFFFFF;
  box-shadow: 2px 4px 4px #BEC8D5;
  border-radius: 10px;
  margin: 0px 30px 20px;
  display: flex;
  flex-direction: column;
  padding: 8px;
    :hover {
      cursor: pointer;
    }
`;

const TextWrapper = styled.div`
font-size: 20px;
color: #474646;

`

export default function SizeUp() {
  const {fireData, sanitizeData} = useContext(FireContext)

    return(
      <div >
        {/* <SearchBarSizeUp /> */}
        <SearchBar />
          {fireData.sizeUpData.info.map((info, index) => (

            <>
              <DropDown
                key={index}
                name={info.name}
                index={index}
              />
              {fireData.sizeUpData.info[index].toggled ?
                  <DropDownInfoWrapper>
                    {fireData.sizeUpData.info[index].data.map(data => 
                      <TextWrapper>
                        <div dangerouslySetInnerHTML={sanitizeData(data)}></div>
                      </TextWrapper>
                    )}
                  </DropDownInfoWrapper>
                :
                null
              }
            </>
          ))}
      </div>
    )
}

