import React from 'react';
import styled from 'styled-components';

const YTEmbedContainer = styled.div`
`;

const YTFrame = styled.iframe`
border: 0px;
padding: 0px;
`;


const YoutubeEmbed = ({ embedId, width, height }) => (
  <YTEmbedContainer>
    <YTFrame
      width={ width }
      height={ height }
      src={`https://www.youtube.com/embed/${embedId}`}
      allowFullScreen>
    </YTFrame>
  </YTEmbedContainer>
);


export default YoutubeEmbed;
