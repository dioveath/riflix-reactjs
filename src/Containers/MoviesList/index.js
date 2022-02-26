import React from 'react';
import styled from 'styled-components';
import MovieCard from '../../Components/MovieCard';
import { Marginer } from '../../Components/Marginer';

import movies from './data/movies.json';

const Title = styled.h2`
text-transform: uppercase;
color: #445599;
`;

const ListContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 6px;
`;


const CardList = movies.items.slice(0, 20).map((movie) =>  {
  return <MovieCard imageSrc={movie.image} title={movie.title} key={movie.id} id={movie.id}/>;
});


const MoviesList = (props) => {
  return (
    <div>
      <Title> Movies </Title>
      <Marginer vertical="20px"/>
      <ListContainer>
        { CardList }
      </ListContainer>
    </div>
  );
};


export default MoviesList;
