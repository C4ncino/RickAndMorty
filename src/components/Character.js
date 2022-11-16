import React from 'react';

const Character = ({character}) => {
    return ( 
        <div className='col-md-4 pb-4'>
            <div className='card shadow p-3 mb-5 rounded border-ligth'>
                <img 
                    className='card-img-top' 
                    src={character.image} 
                    alt="" 
                />
                <div className='card-body text-ligth'>
                    <h5 className='card-title'>{character.name}</h5>
                    <p className='card-text'>{character.status} - {character.species}</p>
                </div>
            </div>
        </div> 
    );
}
 
export default Character;