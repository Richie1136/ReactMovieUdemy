import React, { useState, useEffect, useCallback } from 'react';
import MoviesList from './components/movielist/MoviesList'
import AddMovie from './components/addmovie/AddMovie';
import './App.css';

function App() {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)



  const fetchMovies = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch('https://react-movies-54a72-default-rtdb.firebaseio.com/movies.json')
      const data = await response.json()

      const loadedMovies = []

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        })
      }
      console.log(data)
      setMovies(loadedMovies)
    } catch (err) {
      return err
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  const addMovie = async (movie) => {
    try {
      const response = await fetch('https://react-movies-54a72-default-rtdb.firebaseio.com/movies.json', {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      console.log(data)
    } catch (err) {
      return err
    }
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