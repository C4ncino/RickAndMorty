import { useState, useEffect } from 'react';
import Characters from './Characters';

const App = () => {
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(0);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    const onChange = (e) => {
        setSearch(e.target.value);

        if (page !== 1) setPage(1);
    };

    useEffect(() => {
        if (search) {
            setQuery("page=" + page + "&name=" + search);
        }
        else {
            setQuery("page=" + page);
        }
    }, [page, search]);

    return (
        <main className='container-fluid bg-light'>

            <h1 className='text-info py-4 text-center'>Rick and Morty</h1>

            <form className='input-group justify-content-center'>
                <input
                    className='input-group-text text-start'
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Buscar..."
                    value={search}
                    onChange={onChange}
                />
            </form>

            <menu className='d-flex flex-row justify-content-center align-items-center p-0 gap-3'>
                <button id='backwards' disabled={page === 1} onClick={() => { setPage(page - 1) }} className='btn btn-outline-primary border-0'>
                    &lt; Prev
                </button>

                <p className='mb-0'>Page {page} of {pages}</p>

                <button id='forwards' disabled={page === pages} onClick={() => { setPage(page + 1) }} className='btn btn-outline-primary border-0'>
                    Next &gt;
                </button>
            </menu>

            <Characters {...{ query, setPages }} />
        </main>
    );
}

export default App;