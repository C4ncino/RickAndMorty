import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import Characters from './components/Characters';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

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
            <button onClick={onClick} name = "backwards" className='btn btn-outline-primary'>
              Prev
            </button>
          ):(
            <></>
            )}

          {page < pages ? (
            <button onClick={onClick} name = "fowards" className='btn btn-outline-primary'>
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

root.render(
  <App/>
)