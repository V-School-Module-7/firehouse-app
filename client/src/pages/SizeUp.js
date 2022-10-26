import React, { useContext } from "react"
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
import DropDown from "../components/DropDown";
import { FireContext } from "../context/FireProvider";
// import Benchmarks from "./Benchmarks";
import Test2Benchmarks from "./Test2Benchmarks"
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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

const DropDownBenchmarkWrapper = styled.div`
  background: #FFFFFF;
  box-shadow: 2px 4px 4px #BEC8D5;
  border-radius: 10px;
  margin: 0px 30px 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 8px;

`;

const TextWrapper = styled.div`
font-size: 20px;
color: #474646;

`

export default function SizeUp() {
  const {fireData, sanitizeData} = useContext(FireContext)

  
  return(
    <div>
        {/* <SearchBarSizeUp /> */}
        <SearchBar />
          {fireData.sizeUpData.info.map((items, index) => (
            <>
            {console.log(items.data, "items?")}
              <DropDown
                key={index}
                name={items.name}
                index={index}
                />
                
              {fireData.sizeUpData.info[index].toggled ?
                  <DropDownInfoWrapper
                    style={{
                    //if data has an empty string, don't display the drop down info wrapper
                    // display: items.data[0] === "" ? "none" : null
                    display: items.data.map(item => item === "" ? "none" : null)

                    }}
                    >
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

            {/* 
              Benchmarks should be the last index inside of the sizeUpData array since this data is
              not inside of the sizeUpData array. The reason why the benchmark data is not 
              inside of this array is because the benchmark data consists of objects, while the rest
              of the sizeUpData consists of an array of strings.
            */}
            {fireData.sizeUpData.info[4].toggled ? 
            <DropDownBenchmarkWrapper>
              <TextWrapper>
                {/* <Benchmarks />  */}
                <DndProvider backend={HTML5Backend}>
                  <Test2Benchmarks />
                </DndProvider>
              </TextWrapper>
            </DropDownBenchmarkWrapper>
              : null
            }
      </div>
    )
}

