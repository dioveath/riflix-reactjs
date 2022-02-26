import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


import SearchBar from '../../Containers/SearchBar';
import Navbar from '../../Containers/Navbar';
import MovieDetails from './MovieDetails';
import { Marginer } from '../../Components/Marginer';


import axios from 'axios';
import { useLocation } from 'react-router-dom';


import { Provider } from 'react-redux';
import { movieStore } from './redux.js';
import { apiKey } from './credentials.js';


const MoviePage = (props) => {
  let pathname = useLocation().pathname;
  let splitted = pathname.split('/');
  let movieId = splitted[splitted.length-1];


  // let res = await axios.get(`https:imdb-api.com/en/API/Title/${apiKey}/${movieId}/FullCast,Posters,Images,Trailer,`);


  return (
    <>
      <Navbar/>
      {/* <SearchBar/> */}
      <Marginer vertical="20px"/>
      <Provider store={movieStore}>
        <MovieDetails/>
      </Provider>
    </>
  );

};

export default MoviePage;
