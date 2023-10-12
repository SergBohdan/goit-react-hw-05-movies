import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../api';
import defaultProfileImage from '../../images/default-profile-image.png';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieCast = async () => {
      if (!movieId) return;
      try {
        const movieCast = await fetchMovieCredits(movieId);
        setCast(movieCast);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
    };

    getMovieCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : defaultProfileImage
              }
              alt={actor.name}
              style={{
                maxWidth: '150px',
                maxHeight: '200px',
              }}
            />
            <div>
              <h3>{actor.name}</h3>
              <p>Character: {actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;