import React from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper } from './LayoutStyled';

const Layout = () => {
  return (
    <Wrapper>
      
       <Outlet />
    </Wrapper>
  );
};

export default Layout;

