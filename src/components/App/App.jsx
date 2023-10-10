import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../../GlobalStyles';
import Layout from '../Layout/Layout';
import  Reviews  from '../Reviews/Reviews';
import  Cast  from '../Cast/Cast';

const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('../../pages/MoviesDetails/MoviesDetails')
);

const App = () => {
  return (
    
      
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <GlobalStyle />
        </Routes>
      </Layout>
    
  );
};

export default App;
