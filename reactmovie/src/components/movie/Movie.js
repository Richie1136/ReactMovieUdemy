import React from 'react';

import './Movie.css';

const Movie = ({ title, releaseDate, openingText }) => {
  return (
    <li className='movie'>
      <h2>{title}</h2>
      <h3>{releaseDate}</h3>
      <p>{openingText}</p>
    </li>
  );
};

export default Movie;
