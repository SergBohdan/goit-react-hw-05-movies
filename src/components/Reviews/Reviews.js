import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getMovieReviews = async () => {
      if (!movieId) return;
      try {
        const movieReviews = await fetchMovieReviews(movieId);
        setReviews(movieReviews);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    };

    getMovieReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>Author: {review.author}</p>
            <p>Content: {review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
