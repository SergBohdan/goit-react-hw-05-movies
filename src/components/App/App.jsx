import React, { useState, useEffect, Suspense, lazy } from 'react';
import { fetchTrendingMovies } from '../../api';
import {  Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../../GlobalStyles';
import Movies from '../../pages/Movies/Movies'; 
import { Layout } from '../Layout/Layout'; // Імпортуємо компонент Layout

const Home = lazy(() => import('../../pages/Home/Home'));
const MovieDetails = lazy(() => import('../../pages/MoviesDetails/MoviesDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const App = () => {
  const [searchParams] = useState({});
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
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={<Layout />}>
          <Route
            path="/"
            element={<Home movies={trendingMovies} />}
          />
          <Route
            path="/movies"
            element={<Movies searchParams={searchParams} />} 
          />
          <Route
            path="/movies/:movieId/*"
            element={<MovieDetails />}
          >
            <Route
              path="cast"
              element={<Cast />}
            />
            <Route
              path="reviews"
              element={<Reviews />}
            />
          </Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </Suspense>
  );
};

export default App;
