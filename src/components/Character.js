import React from 'react';

const Character = ({personaje}) => {
    return ( 
        <div className='col-md-4 pb-4'>
            <div className='card shadow p-3 mb-5 bg-body rounded'>
                <img 
                    className='card-img-top' 
                    src={personaje.image} 
                    alt="" 
                />
                <div className='card-body'>
                    <h5 className='card-title'>{personaje.name}</h5>
                    <p className='card-text'>{personaje.status} - {personaje.species}</p>
                </div>
            </div>
        </div> 
    );
}
 
export default Character;