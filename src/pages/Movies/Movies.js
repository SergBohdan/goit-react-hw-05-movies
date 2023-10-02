import React, { useState } from 'react';
import { searchMovies } from '../../api';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    if (query.trim() === '') {
      setMovies([]);
      return;
    }

    setIsLoading(true);
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
      setMovies([]);
    }
  };

  return (
    <div>
      <h1>Movies</h1>
      <div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search movies..."
          onKeyPress={handleKeyPress}
        />
        <button onClick={fetchMovies}>Search</button>
      </div>
      {!isLoading && movies.length === 0 && query && (
        <p>No movies found.</p>
      )}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {movies.length > 0 && (
            <ul>
              {movies.map((movie) => (
                <li key={movie.id}>
                  <Link to={`/movies/${movie.id}`}>
                    {movie.title} ({movie.release_date.slice(0, 4)})
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Movies;
