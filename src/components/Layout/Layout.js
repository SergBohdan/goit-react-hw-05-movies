import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>

      <Outlet />
    </div>
  );
};

export default Layout;
