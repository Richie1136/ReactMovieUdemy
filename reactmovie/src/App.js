import React, { useState } from 'react';

import MoviesList from './components/movielist/MoviesList'
import './App.css';

function App() {

  const [movies, setMovies] = useState([])

  const fetchMovies = () => {
    fetch('https://swapi.dev/api/films/').then(res => {
      return res.json()
    }).then(data => {
      setMovies(data.results)
    })
  }

  return (
    <>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </>
  );
}

export default App;
