import React from 'react';
import styled from 'styled-components';

import MovieDescTab from './MovieDescTab.js';
import YoutubeEmbed from '../../Components/YoutubeEmbed';
import { Marginer } from '../../Components/Marginer';

const MovieDetailsContainer = styled.div`
display: flex;
padding: 0px 80px;
justify-content: space-between;
flex-wrap: wrap;

@media only screen and (max-width: 600px) { 
padding: 0px 20px;
justify-content: center;
}

`;

const MoviePoster = styled.img`
max-height: 300px;
`;


const MovieDetails = (props) => {

  return (
    <>
      <MovieDetailsContainer>
        <MoviePoster src="https://img.yts.mx/assets/images/movies/The_Shawshank_Redemption_1994/medium-cover.jpg"/>
        <Marginer/>
        <MovieDescTab/>
        <Marginer/>
        <YoutubeEmbed embedId="6hB3S9bIaco" width="450px" height="265px"/>
      </MovieDetailsContainer>
    </>
  );
  
};


export default MovieDetails;
