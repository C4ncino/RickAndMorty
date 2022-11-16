import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Character from './Character';

const Characters = ({query, setPages}) => {
    const [characters, setCharacters] = useState([]);

    let url = "https://rickandmortyapi.com/api/character/?";
    url = url + query;

    useEffect(() => {
        axios.get(url).then((response) => {
            setCharacters (response.data.results);
            setPages(response.data.info.pages);
        });
    }, [query, url, setPages]);

    return (
        <>
            <p/>
            <div className='container'>
                <div className='row'>
                    {characters.map( (character) => 
                        <Character key = {character.id} character = {character} />
                    )}
                </div>
            </div>
        </>
    );
}

export default Characters;