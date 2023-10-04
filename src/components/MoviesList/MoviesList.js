import React from 'react';
import { Link } from 'react-router-dom';
import { MovieItem, MovieTitle} from './MoviesListStyled';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      <MovieTitle>Trending Movies</MovieTitle>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <MovieItem>
              {movie.title}
            </MovieItem>
           </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
