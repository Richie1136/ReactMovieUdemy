import React, { useState } from 'react';

import MoviesList from './components/movielist/MoviesList'
import './App.css';

function App() {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  async function fetchMovies() {
    setLoading(true)
    const response = await fetch('https://swapi.dev/api/films/')
    const data = await response.json()
    const transformMovies = data.results.map(movieData => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date
      }
    })
    setMovies(transformMovies)
    setLoading(false)
  }

  return (
    <>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {!loading && movies.length > 0 && <MoviesList movies={movies} />}
        {!loading && movies.length === 0 && <p>Found no movies</p>}
        {loading && <p>Loading</p>}
      </section>
    </>
  );
}

export default App;
