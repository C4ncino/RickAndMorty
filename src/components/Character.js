import { useEffect, useState } from 'react';
import axios from 'axios';

const Character = ({ character }) => {
    const statusColors = {
        "alive": "bg-success",
        "dead": "bg-danger",
        "unknown": "bg-secondary"
    }

    const [firstEpisode, setFirstEpisode] = useState("");

    useEffect(() => {
        axios.get(character.episode[0]).then((response) => {
            setFirstEpisode(response.data.name);
        });
    }, [character]);


    return (
        <section className='col-md-3 pb-4 card shadow p-3 mb-5 rounded border-light'>
            <img
                className='card-img-top'
                src={character.image}
                alt=""
            />
            <div className='card-body'>
                <h2 className='card-title text-center fs-5'>
                    {character.name}

                    <span className={`${statusColors[character.status.toLowerCase()]} d-inline-block rounded-circle ms-2`} style={{ height: "16px", width: "16px" }}
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={character.status} />
                </h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item px-0">{character.origin.name}</li>
                    <li className="list-group-item px-0">{character.species}</li>
                    <li className="list-group-item fw-medium px-0 text-muted">First time seen in:  </li>
                    <li className="list-group-item px-0">{firstEpisode}</li>
                </ul>
            </div>
        </section >
    );
}

export default Character;