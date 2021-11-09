import React from 'react';

import './Movie.css';

const Movie = ({ title, release_date, opening_crawl }) => {
  return (
    <li className='movie'>
      <h2>{title}</h2>
      <h3>{release_date}</h3>
      <p>{opening_crawl}</p>
    </li>
  );
};

export default Movie;
