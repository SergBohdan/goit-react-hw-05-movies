import React from 'react';
import { Circles } from 'react-loader-spinner';
import { LoaderWrap } from './LoaderStyled';

const Loader = () => (
  <LoaderWrap>
    <Circles
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </LoaderWrap>
);

export default Loader;