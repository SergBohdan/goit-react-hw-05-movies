import { SearchBtn, SearchMovies } from 'components/MoviesList/MoviesListStyled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.currentTarget.elements.query.value.trim();
    if (!inputValue) {
      alert('Please enter a search movies.');
      return;
    }
    navigate(`/movies?query=${inputValue}`);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <SearchMovies
          type="text"
          name="query"
          autoFocus
          autoComplete="off"
          placeholder="Enter movie"
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </form>
    </section>
  );
};