import React, { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = evt => {
    setQuery(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search movies..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
