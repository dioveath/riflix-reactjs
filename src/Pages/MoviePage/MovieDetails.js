import React, { useContext } from 'react';
import styled from 'styled-components';

import MovieDescTab from './MovieDescTab.js';
import YoutubeEmbed from '../../Components/YoutubeEmbed';
import { Marginer } from '../../Components/Marginer';
import { MovieContext } from './MovieContext.js';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const MovieDetailsContainer = styled.div`
display: flex;
padding: 0px 80px;
justify-content: space-between;
flex-wrap: wrap;
width: 100%;

@media only screen and (max-width: 1024px) { 
justify-content: center;
padding: 0px 20px;
}

`;

const MoviePoster = styled.img`
max-height: 300px;
`;

function isNullOrUndefined(v){
  return (v === undefined || v === null);
}

const MovieDetails = (props) => {
  let movie = useContext(MovieContext);
  return (
    <>
      <MovieDetailsContainer>
        <MoviePoster src={movie.image}/>
        <Marginer/>
        <MovieDescTab/>
        <Marginer/>
        {
          !isNullOrUndefined(movie.trailer) ? !isNullOrUndefined(movie.trailer.linkEmbed) ? <YoutubeEmbed
                                                                                              embedUrl={movie.trailer.linkEmbed}
                                                                                              width="400px"
                                                                                              height="240px"/>
          : <Skeleton height={300}/>
          : <Skeleton height={300}/>
        }
      </MovieDetailsContainer>
    </>
  );
  
};


export default MovieDetails;
