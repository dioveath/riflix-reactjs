import React from 'react';
import styled from 'styled-components';

import { Marginer } from '../../Components/Marginer';
import YoutubeEmbed from '../../Components/YoutubeEmbed';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Container = styled.div`
`;

const TabGroup = styled.div`
display: flex;
`;

const Tab = styled.div`
padding: 10px 20px;
font-size: 13px;
font-weight: 600;
color: #445599;
// background-color: ${props => props.active == true ? "#445599" : "#44559933"};
border-bottom: ${props => props.active == true ? "2px" : "0px"} solid ${ props => props.active !== undefined ? "#445599" : "gray"};
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
      <img src={imgSrc}/>
      <p className="legend"> { legend }</p>
    </ScreenshotContainer>
  );
};


function renderTabSwitch(tabIndex){
  switch(tabIndex){
  case 0:
    {
      return (
        <MovieDetailsContainer>
          <MovieTitle> Shawshank Redemption </MovieTitle>
          <Marginer/>
          <MovieCategory>
            <MovieSmallText> Action </MovieSmallText>
            <Marginer/>
            <MovieSmallText> 2hr </MovieSmallText>
          </MovieCategory>
          <Marginer/>
          <MovieSummary>
            <MovieSummaryText>
              Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.
            </MovieSummaryText>
            <Marginer/>
          </MovieSummary>
          <Marginer/>
          <MovieTitle> Screenshots </MovieTitle>
          <Carousel dynamicHeight={false} autoPlay={true} infiniteLoop={true}>
            <div>
              <img src="https://wallpapercave.com/wp/wp2014257.jpg" />
            </div>
            <div>
              <img src="https://wallpapercave.com/wp/wp2014258.jpg" />
            </div>
            <div>
              <img src="https://wallpapercave.com/dwp1x/wp2014273.jpg" />
            </div>                        
          </Carousel>
        </MovieDetailsContainer>
      );
    }
    break;
  case 1:
    {
      return (
        <p> Cast </p>
      );
    }
    break;
  }
  return (
    <p> No Tab </p>
  );
}



const MovieDescTab = (props) => {
  const [index, setIndex] = React.useState(0); // tabIndex

  return (
    <Container>
      <TabGroup>
        <Tab onClick={ () => { setIndex(0); } } active={index == 0 ? true : false}> Details </Tab>
        <Tab onClick={ () => { setIndex(1); } } active={index == 1 ? true : false}> Cast </Tab>
      </TabGroup>
      { renderTabSwitch(index) }
    </Container>
  );

};

export default MovieDescTab;
