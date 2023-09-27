import React from 'react';
import { Link } from 'react-router-dom';

const Movies = ({ selectedMovie }) => {
  return (
    <div>
      <h1>Movie Details</h1>
      {selectedMovie ? (
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
              width={250}
            />
          </div>
          <h2>{selectedMovie.title}</h2>
          <p>Overview: {selectedMovie.overview}</p>
          <p>Genres: {selectedMovie.genres.join(', ')}</p>
          <div>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </div>
        </div>
      ) : (
        <p>No movie selected</p>
      )}
    </div>
  );
};

export default Movies;
