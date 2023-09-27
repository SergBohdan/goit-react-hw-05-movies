import React, { useState, useEffect, Suspense, lazy } from 'react';
import { fetchTrendingMovies } from '../api';
import SearchForm from '../components/SearchForm';
import { Link, NavLink, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MoviesDetails'));
const Cast = lazy(() => import('../components/Cast'));
const Reviews = lazy(() => import('../components/Reviews'));

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
          <Route path="/" element={<Home movies={trendingMovies} />} />
          <Route
            path="/movies"
            element={<Movies searchParams={searchParams} />}
          />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
