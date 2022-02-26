import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const CardContainer = styled.div`
position: relative;
height: ${ props => props.height !== undefined ? props.height : "auto"};
width: ${ props => props.width !== undefined ? props.width : "200px"};
background-color: gray;
transition: all 0.1s ease-in-out;

&:hover { 
transform: scale(103%);
}
`;

const CardImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;

const CardTitle = styled.div`
position: absolute;
width: 100%;
height: 30%;
color: white;
padding: 10px 5px;
left: 50%;
bottom: 0%;
font-size: 15px;
transform: translate(-50%, 0%);
text-transform: uppercase;
background-color: rgba(0, 0, 0, 0.7);
text-align: center;
letter-spacing: 0.05rem;
`;


const MovieCard = (props) => {
  return (
    <CardContainer width={ props.width } height={props.height} id={props.id}> 
      <Link to={ `movie/${props.id}`}>
        <CardImage src={props.imageSrc}/>
        <CardTitle fontSize={ props.fontSize }> { props.title } </CardTitle>
      </Link>
    </CardContainer>
  );
};


export default MovieCard;
