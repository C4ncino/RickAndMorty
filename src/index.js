import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import Personajes from './components/Personajes';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  const onClick = (e) =>{
    if(e.target.name === "fowards"){
      setPage(page + 1);
    }
    else if(e.target.name === "backwards"){
      setPage(page - 1);
    }
  }

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
      <h1 className='text-info py-4'>Rick and Morty</h1>
      <form>
        <h5>
          Buscar:
          <input
            type = "text" 
            name = "search" 
            id = "search"
            value = {search}
            onChange = {onChange} 
          />
        </h5>
      </form>
      <p/>
      <Personajes query={query}/>
      <p>
        {page > 1 ? (
          <button onClick={onClick} name = "backwards" className='btn btn-outline-primary'>
            Prev
          </button>
        ):(
          <></>
        )}
        {page < 42 ? (
          <button onClick={onClick} name = "fowards" className='btn btn-outline-primary'>
            Next
          </button>
        ):(
          <></>
        )}
        
      </p>
    </>
  );
}

root.render(
  <App/>
)