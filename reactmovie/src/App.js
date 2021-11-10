import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios'
import MoviesList from './components/movielist/MoviesList'
import AddMovie from './components/addmovie/AddMovie';
import './App.css';

function App() {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)



  const fetchMovies = useCallback(async () => {
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
  }, [])

  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  const addMovie = (movie) => {
    console.log(movie)
  }

  let content = <p>Found no movies</p>

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />
  }

  if (loading) {
    content = <p>Loading</p>
  }

  return (
    <>
      <section>
        <AddMovie onAddMovie={addMovie} />
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </>
  );
}

export default App;
