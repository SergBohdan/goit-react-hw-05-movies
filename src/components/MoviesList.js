import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
