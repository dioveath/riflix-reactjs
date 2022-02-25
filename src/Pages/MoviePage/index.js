import React from 'react';
import styled from 'styled-components';

import SearchBar from '../../Containers/SearchBar';
import Navbar from '../../Containers/Navbar';
import MovieDetails from './MovieDetails';
import { Marginer } from '../../Components/Marginer';

const MoviePage = (props) => {

  return (
    <>
      <Navbar/>
      {/* <SearchBar/> */}
      <Marginer vertical="20px"/>
      <MovieDetails/>
    </>
  );

};

export default MoviePage;
