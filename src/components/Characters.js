import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

const Characters = ({ query, setPages }) => {
    const [characters, setCharacters] = useState([]);

    let url = "https://rickandmortyapi.com/api/character/?";
    url = url + query;

    useEffect(() => {
        axios.get(url).then((response) => {
            setCharacters(response.data.results);
            setPages(response.data.info.pages);
        });
    }, [query, url, setPages]);

    return (
        <article className='container'>
            <div className='row gap-4 mx-auto justify-content-center'>
                {characters.map((character) =>
                    <Character key={character.id} character={character} />
                )}
            </div>
        </article>
    );
}

export default Characters;