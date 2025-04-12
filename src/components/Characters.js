import axios from 'axios';
import { useQuery } from '@tanstack/react-query'

import Character from './Character';

const Characters = ({ query, setPages }) => {
    let url = "https://rickandmortyapi.com/api/character/?";
    url = url + query;

    const { isPending, data: characters } = useQuery({
        queryKey: ['getCharacters', url],
        queryFn: async () => {
            const response = await axios.get(url);

            setPages(response.data.info.pages);

            return response.data.results;
        },
    })

    if (isPending) return (
        <h2 className="text-center">Loading...</h2>
    )

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