import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../api';
import MoviesList from '../../components/MoviesList/MoviesList';
import Loader from '../../components/Loader/Loader'; 
import { MovieTitle } from 'components/MoviesList/MoviesListStyled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
        setIsLoading(false); 
      } catch (error) {
        console.error('Error fetching trending movies:', error);
        setIsLoading(false); 
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <div>
      <MovieTitle>Trending Movies</MovieTitle>
     <div>
      {isLoading ? ( 
        <Loader />
      ) : (
        <MoviesList movies={trendingMovies} />
      )}
    </div>
    </div>
  );
};

export default Home;

