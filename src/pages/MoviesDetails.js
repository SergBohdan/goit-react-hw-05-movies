import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { fetchMovieDetails, fetchMovieCredits, fetchMovieReviews } from '../api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});
  const [credits, setCredits] = useState([]);
  const [reviews, setReviews] = useState([]);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

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

      <h2>Cast</h2>
      <ul>
        {credits.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>

      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>Author: {review.author}</p>
            <p>Content: {review.content}</p>
          </li>
        ))}
      </ul>

      <Link to={backLink}>Go Back</Link>
    </div>
  );
};

export default MovieDetails;