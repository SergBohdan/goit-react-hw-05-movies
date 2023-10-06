import React, { useEffect, useState } from 'react';
import { useParams, Link, Route, Routes } from 'react-router-dom';
import { fetchMovieDetails } from '../../api';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import { Wrapper } from 'components/Layout/LayoutStyled';
import { LinkActors, MoviesAbout, MoviesDscr } from './MoviesDetailsStyled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      if (!movieId) return;
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        setMovie(movieDetails);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    getMovieDetails();
  }, [movieId]);

  return (
    <Wrapper>
      {movie && (
        <div>
          <Link to="/">Go Back</Link>
          <MoviesDscr>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : 'https://via.placeholder.com/150'
              }
              alt={movie.title}
              style={{
                maxWidth: '200px',
                maxHeight: '300px',
              }}
            />
            <MoviesAbout>
              <h2>
                {movie.title} (
                {movie.release_date && movie.release_date.slice(0, 4)})
              </h2>
              <p>User score: {movie.vote_average}</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h2>Genres</h2>
              <ul>
                {movie.genres &&
                  movie.genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
              </ul>
            </MoviesAbout>
          </MoviesDscr>
          <LinkActors>
            <div>
              <h2>Additional Information</h2>
            </div>
            <ul>
              <li>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </LinkActors>

          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>
        </div>
      )}
    </Wrapper>
  );
};

export default MovieDetails;