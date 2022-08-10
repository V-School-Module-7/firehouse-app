import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import buildingData from '../fire-data/buildingData';
import { FireContext } from '../context/FireProvider';

const FireWrapper = styled.div``;
const SearchBarFire = styled(SearchBar)``;
const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: 154px 154px;
    grid-auto-rows: auto;
    grid-gap: 20px;
    width: 100vw:
    margin: 16px auto 0px auto;
    justify-content: center;
`;

// need buttons for each subcategory, create data for this component, hava a path for each subcategory

function BuildingTypes(props) {
    const { fireData } = useContext(FireContext)
    // const buildingTypesData = [
    //     {name: "Size Up", path: 'fire/size-up', icon: null},
    //     {name: "Building Types", path: 'fire/building-types', icon: null},
    //     {name: "VEIS", path: 'fire/veis', icon: null},
    //     {name: "Ventilation", path: 'fire/ventilation', icon: null},
    //     {name: "CO Levels", path: 'fire/co-levels', icon: null},
    // ];
    // console.log(sizeUpData, "button info")
    


    console.log(fireData, "data")
    return (
        <div>
            
            <SearchBarFire />
            <ButtonsContainer>
                {/* hi */}
                {console.log("hit building types page")}
                {fireData.buildingData.info.map((buildingData, index) => (
                    <Button
                        key={buildingData + index}
                        text={buildingData.name}
                        path={buildingData.path}
                    />
                    // console.log(buildingData, "bd")
                ))}
            </ButtonsContainer>
        </div>
        // <FireWrapper>
        //     <SearchBarFire />
        //     <ButtonsContainer>{displayButtons}</ButtonsContainer>
        // </FireWrapper>
    );
}

export default BuildingTypes;

// import React, { useContext } from "react"
// import SearchBar from '../components/SearchBar';
// import styled from 'styled-components';
// import DropDown from "../components/DropDown";
// import { FireContext } from "../context/FireProvider";

// // const SearchBarSizeUp = styled(SearchBar);
// const DropDownInfoWrapper = styled.div`
//   background: #FFFFFF;
//   box-shadow: 2px 4px 4px #BEC8D5;
//   border-radius: 10px;
//   margin: 0px 30px 20px;
//   display: flex;
//   flex-direction: column;
//   padding: 8px;
//     :hover {
//       cursor: pointer;
//     }
// `;

// export default function SizeUp() {
//   const { info } = useContext(FireContext)
// // console.log(info, "info")

//     return(
//       <div >
//         {/* <SearchBarSizeUp /> */}
//         <SearchBar />
//           {info.sizeUpData.map((sizeUpData, index) => (
//             <>
//               <DropDown
//                 key={index}
//                 name={sizeUpData.name}
//                 index={index}
//               />
//               {info.sizeUpData[index].toggled ?
//                   <DropDownInfoWrapper>
//                     {info.sizeUpData[index].data.map(data => 
//                       <div dangerouslySetInnerHTML={data}></div>
//                     )}
//                   </DropDownInfoWrapper>
//                 :
//                 null
//               }
//             </>
//           ))}
//       </div>
//     )
// }