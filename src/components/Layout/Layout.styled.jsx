import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Navbar = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;

  &:hover {
    background-color: #555;
  }

  &.active {
    background-color: #777;
  }
`;
