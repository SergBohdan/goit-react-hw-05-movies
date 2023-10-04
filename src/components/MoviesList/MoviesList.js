import React from 'react';
import { Link } from 'react-router-dom';
import { MovieItem} from './MoviesListStyled';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      
  {movies.map((movie) => (
    <MovieItem key={movie.id}>
      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
    </MovieItem>
  ))}
</ul>
  );
};

export default MoviesList;
