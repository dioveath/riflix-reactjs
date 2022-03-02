import React, { useContext } from 'react';
import styled from 'styled-components';

import { Marginer } from '../../Components/Marginer';
import MovieCard from '../../Components/MovieCard';

import { MovieContext } from './MovieContext.js';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Container = styled.div`
min-width: 300px;
width: 600px;
max-width: 600px;
`;

const TabGroup = styled.div`
display: flex;
`;

const Tab = styled.div`
padding: 10px 20px;
font-size: 13px;
font-weight: 600;
color: #445599;
// background-color: ${props => props.active === true ? "#445599" : "#44559933"};
border-bottom: ${props => props.active === true ? "2px" : "0px"} solid ${ props => props.active !== undefined ? "#445599" : "gray"};
text-transform: uppercase;

&:hover { 
background-color: #44559944;
}

`;


const MovieTitle = styled.h3`
color: #445599;
`;

const MovieDetailsContainer = styled.div`
padding: 10px 20px;
`;

const MovieCategory = styled.div`
display: flex;
`;

const MovieSmallText = styled.small`
font-size: 13px;
font-weight: 400;
color: #9999bb;
`;

const MovieSummary = styled.div`
display: flex;
`;

const MovieSummaryText = styled.p`
font-size: 13px;
font-weight: 300;
color: #444499;
`;

const ScreenshotContainer = styled.div`
`;

const Screenshot = ({ imgSrc, legend }) => {
  return (
    <ScreenshotContainer>
      <img src={imgSrc} alt={legend}/>
      <p className="legend"> { legend }</p>
    </ScreenshotContainer>
  );
};


const CastDetailsContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 10px;
`;


function isNullOrUndefined(v){
  return (v === undefined || v === null);
}

const MovieDetailsTab = () => {
  let movie = useContext(MovieContext);
  if(movie === undefined) return <Skeleton count={10}/>;

  return (
    <MovieDetailsContainer>
      <MovieTitle> { !isNullOrUndefined(movie.title) ? movie.title : <Skeleton/> } </MovieTitle>
      <Marginer/>
      <MovieCategory>
        <MovieSmallText> { !isNullOrUndefined(movie.genres) ? movie.genres : <Skeleton/> } </MovieSmallText>
        <Marginer/>
        <MovieSmallText> { !isNullOrUndefined(movie.runtimeStr) ? movie.runtimeStr : <Skeleton/> } </MovieSmallText>
      </MovieCategory>
      <Marginer/>
      <MovieSummary>
        <MovieSummaryText>
          { !isNullOrUndefined(movie.plot) ? movie.plot : <Skeleton/> }
        </MovieSummaryText>
        <Marginer/>
      </MovieSummary>
      <Marginer/>
      <MovieTitle> Screenshots </MovieTitle>
      <Carousel dynamicHeight={true} autoPlay={true} infiniteLoop={true}>
        {
          !isNullOrUndefined(movie.images) ?  !isNullOrUndefined(movie.images.items) ? movie.images.items.slice(0, 10).map((ss) => {
            return (
              <Screenshot imgSrc={ss.image} legend={ss.title} key={ss.title}/>
            );
          }) : <Skeleton height={200}/> : <Skeleton height={200}/>
        }
      </Carousel>
    </MovieDetailsContainer>
  );  
};

const CastDetailsTab = () => {
  let movie = useContext(MovieContext);
  if(isNullOrUndefined(movie)) return <Skeleton count={10}/>;  
  return (
    <CastDetailsContainer>
      {
        !isNullOrUndefined(movie.actorList) ? movie.actorList.slice(0, 10).map((actor) => {
          return <MovieCard
                   imageSrc={actor.image}
                   height="200px"
                   title={actor.name}
                   key={actor.id}
                 />;
        }) : <Skeleton count={5}/>
      }
    </CastDetailsContainer>
  );
};


function RenderTabSwitch({ tabIndex }){
  switch(tabIndex){
  case 0:
    return <MovieDetailsTab/>;
  case 1:
    {
      return <CastDetailsTab/>;
    }
  default:
    return (
      <p> No Tab </p>
    );    
  }

}



const MovieDescTab = (props) => {
  const [index, setIndex] = React.useState(0); // tabIndex

  return (
    <Container>
      <TabGroup>
        <Tab onClick={ () => { setIndex(0); } } active={index === 0 ? true : false}> Details </Tab>
        <Tab onClick={ () => { setIndex(1); } } active={index === 1 ? true : false}> Cast </Tab>
      </TabGroup>
      <Marginer vertical="20px"/>
      <RenderTabSwitch tabIndex={index}/>
    </Container>
  );

};

export default MovieDescTab;
