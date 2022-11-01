import React, { useContext} from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import { FireContext } from '../context/FireProvider';

// const FireWrapper = styled.div``;
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

function BuildingTypes() {
    const { fireData } = useContext(FireContext)

    return (
        <div>
            <SearchBarFire />
            <ButtonsContainer>
                {fireData.buildingData.info.map((buildingData, index) => (
                    <Button
                        key={buildingData + index}
                        text={buildingData.name}
                        path={buildingData.path}
                    />
                ))}
            </ButtonsContainer>
        </div>
    );
}

export default BuildingTypes;