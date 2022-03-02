import React, { useState, useEffect } from 'react';

import Navbar from '../../Containers/Navbar';
import MovieDetails from './MovieDetails';
import { Marginer } from '../../Components/Marginer';

import axios from 'axios';
import { useLocation } from 'react-router-dom';

import { apiKey } from './credentials.js';
import { MovieContext } from './MovieContext.js';


const MoviePage = (props) => {
  let pathname = useLocation().pathname;
  let splitted = pathname.split('/');
  let movieId = splitted[splitted.length-1];

  const [movie, setMovie] = useState({ id: 0});
  
  useEffect(() => {
    (async () => {
      let res = await axios.get(`https://imdb-api.com/en/API/Title/${apiKey}/${movieId}/FullCast,Posters,Images,Trailer,`);
      setMovie(res.data);
      console.log(res.data);      
    })();
  }, [movieId]);


  return (
    <>
      <Navbar/>
      <Marginer vertical="20px"/>
      <MovieContext.Provider value={movie}>
        <MovieDetails/>
      </MovieContext.Provider>
    </>
  );

};

export default MoviePage;
