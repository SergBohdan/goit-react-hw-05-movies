import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import {
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
} from '../api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});
  const [credits, setCredits] = useState([]);
  const [reviews, setReviews] = useState([]);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const castLink = `/movies/${movieId}/cast`; // Посилання на Cast
  const reviewsLink = `/movies/${movieId}/reviews`; // Посилання на Reviews

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        setMovieData(movieDetails);

        const movieCredits = await fetchMovieCredits(movieId);
        setCredits(movieCredits);

        const movieReviews = await fetchMovieReviews(movieId);
        setReviews(movieReviews);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    getMovieData();
  }, [movieId]);

  return (
    <div>
      <h1>{movieData.title}</h1>
      <p>{movieData.overview}</p>
      <div>
        <h2>Additional Information</h2>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link to={backLink}>Go Back</Link>
      </div>
    </div>
  );
};

export default MovieDetails;
