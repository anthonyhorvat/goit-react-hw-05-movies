import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  gap: 20px;
  margin: 0 -10px;
`;

export const MovieListItem = styled.li`
  width: 200px;
  text-align: center;
  list-style: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  display: block;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const PosterImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
`;

export const MovieTitle = styled.p`
  padding: 10px;
  margin: 0;
  background-color: #fff;
`;
