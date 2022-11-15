import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Character from './Character';

const Personajes= ({query, setPages}) => {
    const [Personajes, setPersonajes] = useState([]);
    let url = "https://rickandmortyapi.com/api/character/?";
    url = url + query;
    // console.log(query);

    useEffect(() => {
        axios.get(url).then((response) => {
            setPersonajes (response.data.results);
            setPages(response.data.info.pages);
        });
    }, [query, url, setPages]);

    return (
        <>
            <div className='container'>
                <div className='row'>
                    {Personajes.map( (personaje) => 
                        <Character key = {personaje.id} personaje = {personaje} />
                    )}
                </div>
            </div>
        </>
    );
}

export default Personajes;