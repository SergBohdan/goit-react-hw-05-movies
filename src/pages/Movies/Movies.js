import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchMovies } from '../../api';
import MoviesList from '../../components/MoviesList/MoviesList';
import Loader from '../../components/Loader/Loader';
import { MovieTitle, SearchBtn, SearchMovies } from 'components/MoviesList/MoviesListStyled';


const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmptyQuery, setIsEmptyQuery] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryFromURL = searchParams.get('query');

    if (queryFromURL) {
      setQuery(queryFromURL);
    }
  }, [location]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (query.trim() === '') {
        setIsEmptyQuery(true);
        setMovies([]);
        return;
      }

      setIsLoading(true);
      setIsEmptyQuery(false);
      try {
        const result = await searchMovies(query);
        setMovies(result);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setQuery(event.target.value);
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);

    if (event.target.value.trim() === '') {
      setIsEmptyQuery(false);
      setMovies([]);
    }
  };

  return (
    <div>
      <MovieTitle>Movies</MovieTitle>
      <div>
        <SearchMovies
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search movies..."
          onKeyPress={handleKeyPress}
        />
        <SearchBtn onClick={() => setQuery(query)}>Search</SearchBtn>
      </div>
      {isEmptyQuery && <p>Please enter a search query.</p>}
      {isLoading ? (
        <Loader />
      ) : (
        <MoviesList movies={movies} />
      )}
    </div>
  );
};

export default Movies;