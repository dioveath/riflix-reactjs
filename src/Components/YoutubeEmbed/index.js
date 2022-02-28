import React from 'react';
import styled from 'styled-components';

const YTEmbedContainer = styled.div`
width: 100%;
`;

const YTFrame = styled.iframe`
border: 0px;
padding: 0px;
width: 100%;
height: 400px;
`;


const YoutubeEmbed = ({ embedUrl, width, height }) => (
  <YTEmbedContainer>
    <YTFrame
      width={ width }
      height={ height }
      src={embedUrl}
      allowFullScreen>
    </YTFrame>
  </YTEmbedContainer>
);


export default YoutubeEmbed;
