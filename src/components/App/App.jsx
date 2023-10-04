import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Route, Routes, Navigate, NavLink } from 'react-router-dom';
import { GlobalStyle } from '../../GlobalStyles';
import Layout from '../Layout/Layout';
import { fetchTrendingMovies } from '../../api';
import Movies from 'pages/Movies/Movies';

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
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={<Layout />}>
            <Route
              index
              element={
                <>
                  <Home movies={trendingMovies} />
                </>
              }
            />
            <Route
              path="movies"
              element={<Movies searchParams={searchParams} />}
            />
            <Route
              path="movies/:movieId/*" 
              element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <GlobalStyle />
      </Suspense>
    </div>
  );
};

export default App;
