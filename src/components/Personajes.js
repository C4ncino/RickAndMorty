import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Character from './Character';

const Personajes= ({page}) => {
    const [Personajes, setPersonajes] = useState([]);
    let url = "https://rickandmortyapi.com/api/character/?page=";
    url = url + page;

    useEffect(() => {
        axios.get(url).then((response) => {
            setPersonajes (response.data.results);
            // console.log(Personajes)
        });
    }, [page, url]);

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