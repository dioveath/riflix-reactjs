import React from 'react';
import styled from 'styled-components';

import Navbar from '../../Containers/Navbar';
import SearchBar from '../../Containers/SearchBar';
import MoviesList from '../../Containers/MoviesList';
import { Marginer } from '../../Components/Marginer';


const TopContainer = styled.div`
display: grid;
grid-template-columns: 8fr 2fr;
padding: 0px 80px;

@media only screen and (max-width: 600px) { 
display: flex;
flex-wrap: wrap-reverse;
}

`;

const HomePage = (props) => {
  return (
    <>
      <Navbar/>
      <Marginer vertical="30px"/>
      <TopContainer>
        <MoviesList/>
        <SearchBar/>
      </TopContainer>
    </>
  );
};


export default HomePage;
