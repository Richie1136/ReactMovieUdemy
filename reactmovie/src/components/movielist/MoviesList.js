import React from 'react';

import Movie from '../movie/Movie'
import './MoviesList.css';

const MovieList = ({ movies }) => {
  return (
    <ul className='movies-list'>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
