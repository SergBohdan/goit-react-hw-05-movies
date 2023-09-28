import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Movies = ({ selectedMovie }) => {
  return (
    <div>
      {selectedMovie ? (
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
              width={250}
            />
          </div>
          <h2>
            {selectedMovie.title} ({selectedMovie.release_date.slice(0, 4)})
          </h2>
          <p>User Score: {selectedMovie.vote_average * 10}%</p>
          <p>Overview: {selectedMovie.overview}</p>
          <p>
            Genres: {selectedMovie.genres.map(genre => genre.name).join(', ')}
          </p>
          <div>
            <Link to={`/movies/${selectedMovie.id}/cast`}>Cast</Link>
            <Link to={`/movies/${selectedMovie.id}/reviews`}>Reviews</Link>
          </div>
        </div>
      ) : (
        <p>No movie selected</p>
      )}
    </div>
  );
};

export default Movies;
