import { SearchBtn, SearchMovies } from 'components/MoviesList/MoviesListStyled';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) {
      alert('Please enter a search query.');
      return;
    }
    setSearchParams({ query: trimmedValue });
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
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </form>
    </section>
  );
};

