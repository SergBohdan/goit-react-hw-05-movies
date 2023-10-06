import React from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.currentTarget.elements.query.value.trim();
    if (!inputValue) {
      alert('Please enter a search query.');
      return;
    }
    navigate(`/movies?query=${inputValue}`);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoFocus
          autoComplete="off"
          placeholder="Enter movie"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};