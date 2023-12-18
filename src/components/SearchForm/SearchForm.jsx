import { useState } from 'react';
import {
  SearchInput,
  SearchButton,
  StyledSearchForm,
} from './SearchForm.styled';

const SearchForm = ({ searchMovies }) => {
  const [query, setQuery] = useState('');
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    searchMovies(query.toLowerCase());
  };

  return (
    <StyledSearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={handleInputChange}
      />
      <SearchButton type="submit">Search</SearchButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
