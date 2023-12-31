import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ActiveLink, Header, Nav } from 'components/App/AppStyled';
import Loader from 'components/Loader/Loader';
import { Wrapper } from './LayoutStyled';


const Layout = () => {
  return (
    <Wrapper>
      <Header>
        <Nav>
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/movies">Movies</ActiveLink>
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

export default Layout;
