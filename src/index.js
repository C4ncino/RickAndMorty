import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import Personajes from './components/Personajes';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const [page, setPage] = useState(1);

  const foward = () =>{
    if(page < 42){
      setPage(page + 1)
    }
  }

  const backwards = () =>{
    if(page > 1){
      setPage(page - 1)
    }
  }


  return (
    <>
      <h1 className='text-info py-4'>Rick and Morty</h1>
      <Personajes page={page}/>
      <p>
        <button onClick={backwards}>
          Previous Page
        </button>
        <button onClick={foward}>
          Next Page
        </button>
      </p>
    </>
  );
}

root.render(
  <App/>
)