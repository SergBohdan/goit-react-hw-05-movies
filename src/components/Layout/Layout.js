import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
        </nav>
      </header>

      <Outlet />
    </div>
  );
};

export default Layout;

