import { useLocation, Link } from 'react-router-dom';
import { MovieItem } from './MoviesListStyled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <section>
      <ul>
        {movies.map(({ id, title, name }) => (
          <MovieItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title || name}
            </Link>
          </MovieItem>
        ))}
      </ul>
    </section>
  );
};
export default MoviesList;