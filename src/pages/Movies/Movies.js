import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from '../../components/MoviesList/MoviesList';
import Loader from '../../components/Loader/Loader';
import { MovieTitle } from 'components/MoviesList/MoviesListStyled';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { searchMovies } from '../../api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmptyQuery, setIsEmptyQuery] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();



  useEffect(() => {
const query = searchParams.get('query')

    if (!query)return ;
      
      setIsLoading(true);
      setIsEmptyQuery(false);

      searchMovies(query)
        .then((result) => setMovies(result))
        .catch((error) => {
          console.error('Error fetching movies:', error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    
  }, [searchParams]);

  return (
    <div>
      <MovieTitle>Movies</MovieTitle>
      <section>
        <SearchForm setSearchParams={setSearchParams}></SearchForm>
      </section>
      {isEmptyQuery && <p>Please enter a search query.</p>}
      {isLoading ? <Loader /> : <MoviesList movies={movies} />}
    </div>
  );
};

export default Movies;
