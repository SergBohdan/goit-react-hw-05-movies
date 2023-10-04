import styled from 'styled-components';

export const MovieItem = styled.li`
  margin-bottom: 8px;
  
`;

export const MovieTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 30px;
  font-weight: bold;
  color: yellow;
`;

export const SearchMovies = styled.input`
  margin-bottom: 20px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    min-height: 40px;
`;

export const SearchBtn = styled.button`
  padding: 8px 16px;
  border-radius: 5px;
  background-color: red;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 50px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;
