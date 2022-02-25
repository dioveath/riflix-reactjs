import React from 'react';
import styled from 'styled-components';

import MovieDescTab from './MovieDescTab.js';
import YoutubeEmbed from '../../Components/YoutubeEmbed';

const MovieDetailsContainer = styled.div`
display: flex;
padding: 0px 80px;
// flex-wrap: wrap;
`;

const MoviePoster = styled.img`
width: auto;
max-height: 350px;
`;


const MovieDetails = (props) => {

  return (
    <>
      <MovieDetailsContainer>
        <MoviePoster src="https://img.yts.mx/assets/images/movies/The_Shawshank_Redemption_1994/medium-cover.jpg"/>
        <MovieDescTab/>
        <YoutubeEmbed embedId="6hB3S9bIaco" width="400px" height="235"/>
      </MovieDetailsContainer>
    </>
  );
  
};


export default MovieDetails;
