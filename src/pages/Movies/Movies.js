import React, { useState } from 'react';
import { searchMovies } from '../../api';
import MoviesList from '../../components/MoviesList/MoviesList';
import Loader from '../../components/Loader/Loader'; 
import { MovieTitle, SearchBtn, SearchMovies } from 'components/MoviesList/MoviesListStyled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmptyQuery, setIsEmptyQuery] = useState(false); 

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

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchMovies();
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
        <SearchBtn onClick={fetchMovies}>Search</SearchBtn>
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
