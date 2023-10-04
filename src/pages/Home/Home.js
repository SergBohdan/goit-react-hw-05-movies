import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../api';
import MoviesList from '../../components/MoviesList/MoviesList'; 

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <div>
      
      <MoviesList movies={trendingMovies} /> 
    </div>
  );
};

export default Home;
