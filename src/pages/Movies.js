import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { searchMovies } from '../api';
import MoviesList from '../components/MoviesList';


const Movies = ({ searchParams }) => {
  const { query } = searchParams;
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  // const { movieId } = useParams();

  useEffect(() => {
    const handleSearch = async () => {
      if (!query) return;
      try {
        const movies = await searchMovies(query);
        setSearchResults(movies);
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    };

    handleSearch();
  }, [query]);

  return (
    <div>
      <h1>Movies</h1>
      {query && (
        <div>
          <h2>Search Results for "{query}"</h2>
          <MoviesList movies={searchResults} />
        </div>
      )}
      {!query && (
        <div>
          <h2>Trending Movies</h2>
          <MoviesList movies={searchResults} />
        </div>
      )}
      <Link to={backLink}>Go Back</Link>
    </div>
  );
};

export default Movies;