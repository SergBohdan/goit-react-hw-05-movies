import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../api';
// import { defaultImg } from '../constants';
// import { StyledImage } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const getMovieCredits = async () => {
      if (!movieId) return;
      try {
        const movieCredits = await fetchMovieCredits(movieId);
        setCredits(movieCredits);
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
        {credits.map((actor) => (
          <li key={actor.id}>
            {/* <StyledImage
              src={actor.profile_path ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}` : defaultImg}
              alt={`${actor.name}'s profile`}
            /> */}
            {actor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;