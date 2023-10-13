import React, { useEffect, useState, useRef } from 'react';
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

  const queryRef = useRef(searchParams.get('query') || '');

  useEffect(() => {
    if (searchParams.get('query') !== queryRef.current || !queryRef.current) {
      queryRef.current = searchParams.get('query') || '';
      setIsLoading(true);
      setIsEmptyQuery(false);

      searchMovies(queryRef.current)
        .then((result) => setMovies(result))
        .catch((error) => {
          console.error('Error fetching movies:', error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
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
