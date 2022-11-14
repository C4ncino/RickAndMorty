import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import Personajes from './components/Personajes';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const [page, setPage] = useState(1);

  const onClick = (e) =>{
    if(e.target.name === "fowards"){
      setPage(page + 1);
    }
    else if(e.target.name === "backwards"){
      setPage(page - 1);
    }
  }

  return (
    <>
      <h1 className='text-info py-4'>Rick and Morty</h1>
      <Personajes page={page}/>
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