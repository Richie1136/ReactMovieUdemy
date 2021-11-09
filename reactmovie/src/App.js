import React, { useState } from 'react';
import axios from 'axios'
import MoviesList from './components/movielist/MoviesList'
import './App.css';

function App() {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchMovies = async () => {
    try {
      setLoading(true)
      const response = await axios('https://swapi.dev/api/films/')
      const data = await response.data.results
      const transformMovies = data.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      })
      setMovies(transformMovies)
    } catch (err) {
      return err
    }
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
