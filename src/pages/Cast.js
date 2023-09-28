import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieCredits = async () => {
      if (!movieId) return;
      try {
        const movieCredits = await fetchMovieCredits(movieId);
        setCast(movieCredits);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    };

    getMovieCredits();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
