import styled from 'styled-components';

export const StyledSearchForm = styled.form`
  display: flex;
  align-items: center;
  max-width: 400px;
  margin: 20px auto;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #333;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 16px;
  outline: none;
`;

export const SearchButton = styled.button`
  padding: 8px 16px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4a4949;
  }
`;
