import React, {useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import DrugList from '../components/DrugList';



const SearchBarDrugs = styled(SearchBar)``;

const Drugs = () => {
    const [search, setSearch] = useState(``);
    const [buttons, setButtons] = useState([])
    const [query, setQuery] = useState([''])

    useEffect(() => {
        setButtons(DrugList);
    }, [query]);

    const updateSearch = e =>{
        setSearch(e.target.value)
    }

    const updateQuery = e =>{
        e.preventDefault();
        setQuery(search)
    }


    return(
        <div>
            <SearchBarDrugs value={search} onChange={updateSearch}  onSubmit={updateQuery}/>
            <DrugList />
        </div>
        )
    
}



export default Drugs
