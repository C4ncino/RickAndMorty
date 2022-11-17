import React, {useState, useEffect} from 'react';
import Characters from './Characters';

const App = () => {
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(0);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    const onChange = (e) => {
        if (e.target.name === "search"){
            setSearch(e.target.value);
            if(page !== 1){
                setPage(1);
            }
        }
    };

    useEffect(() => {
        if(search){
            setQuery("page=" + page + "&name=" + search);
        }
        else{
            setQuery("page=" + page);
        }
    }, [page, search]);

    return (
        <>
        <div className='container-fluid text-center bg-dark'>

            <h1 className='text-info py-4'>Rick and Morty</h1>

            <div>
            <input
                type = "text" 
                name = "search" 
                id = "search"
                placeholder="Buscar..."
                value = {search}
                onChange = {onChange} 
            />
            </div>

            <p/>

            <div>
                {page > 1 ? (
                    <button id='bacwards' onClick={()=>{setPage(page-1)}} className='btn btn-outline-primary'>
                        Prev
                    </button>
                ):(
                    <></>
                    )}

                {page < pages ? (
                    <button id='fowards' onClick={()=>{setPage(page-1)}} className='btn btn-outline-primary'>
                        Next
                    </button>
                ):(
                    <></>
                )}
            </div>
            
            <Characters query={query} setPages={setPages}/>

        </div>
        </>
    );
}
 
export default App;