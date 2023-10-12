// AppStyled.js
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #333;
  color: white;
  padding: 15px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: start;
  
  

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

  }

  li {
    margin-right: 10px;
  }
`;

export const ActiveLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 24px;
  margin-right: 15px;
  

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &.active {
    color: orange;
  }
`;

// export const LayoutContainer = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 15px;
//   box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
//     0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
// `;
