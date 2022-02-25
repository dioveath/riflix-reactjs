import React from 'react';
import styled from 'styled-components';

export const NavbarContainer = styled.div`
width: 100%;
background-color: #445599;
display: flex;
flex-direction: row-reverse;
justify-content: space-around;
align-items: center;
`;

export const NavList = styled.ul`
list-style-type: none;
display: flex;
align-items: center;
justify-content: center;
font-size: 15px;
font-weight: 600;
`;

export const NavItem = styled.li`
padding: 15px 10px;
text-transform: uppercase;
color: white;
height: 100%;
background-color: ${props => props.active ? "#554499" : "00000000"};

&:hover { 
background-color: #99aaee;
}


`;
