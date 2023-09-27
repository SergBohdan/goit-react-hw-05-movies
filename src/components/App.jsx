import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom'; 
import { fetchTrendingMovies } from '../api';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MoviesDetails';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import SearchForm from '../components/SearchForm';
// import MoviesList from '../components/MoviesList';


const App = () => {
  const [searchParams, setSearchParams] = useState({});
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

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };

  return (
    <Router>
      <header>
        <NavLink>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </NavLink>
        <SearchForm onSubmit={handleSubmit} />
      </header>
      <Routes>
        <Route path="/" element={<Home movies={trendingMovies} />} />
        <Route path="/movies" element={<Movies searchParams={searchParams} />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
};

export default App;