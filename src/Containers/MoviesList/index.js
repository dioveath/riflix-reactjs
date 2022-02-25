import React from 'react';
import styled from 'styled-components';
import MovieCard from '../../Components/MovieCard';
import { Marginer } from '../../Components/Marginer';

const Title = styled.h2`
text-transform: uppercase;
color: #445599;
`;

const ListContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 6px;
`;

const MoviesList = (props) => {
  return (
    <div>
      <Title> Movies </Title>
      <Marginer vertical="20px"/>
      <ListContainer>
        <MovieCard
          imageSrc="https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg"
          title="Spider Man : No Way Home"/>
        <MovieCard
          imageSrc="https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg"
          title="Spider Man : No Way Home"/>
        <MovieCard
          imageSrc="https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg"
          title="Spider Man : No Way Home"/>
        <MovieCard
          imageSrc="https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg"
          title="Spider Man : No Way Home"/>
        <MovieCard
          imageSrc="https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg"
          title="Spider Man : No Way Home"/>
        <MovieCard
          imageSrc="https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg"
          title="Spider Man : No Way Home"/>
        <MovieCard
          imageSrc="https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg"
          title="Spider Man : No Way Home"/>
        <MovieCard
          imageSrc="https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg"
          title="Spider Man : No Way Home"/>                
      </ListContainer>
    </div>
  );
};


export default MoviesList;
