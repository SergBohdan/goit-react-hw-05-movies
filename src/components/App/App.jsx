import React, { useState, useEffect, Suspense, lazy } from 'react';
import { fetchTrendingMovies } from '../../api';
import SearchForm from '../SearchForm/SearchForm';
import { NavLink, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../../GlobalStyles';

const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../../pages/MoviesDetails/MoviesDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const App = () => {
  const [searchParams, setSearchParams] = useState({});
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [currentRoute, setCurrentRoute] = useState('');

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

  const handleSubmit = value => {
    setSearchParams({ query: value });
    setCurrentRoute('/movies');
  };

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
        <SearchForm onSubmit={handleSubmit} />
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
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
        </Routes>
        <GlobalStyle />
      </Suspense>
    </div>
  );
};

export default App;
