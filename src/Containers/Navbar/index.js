import React from 'react';
import { NavbarContainer, NavList, NavItem } from './NavbarElements.js';
import ProfileBar from '../ProfileBar';

const Navbar = () => {
  return (
    <NavbarContainer>
      <ProfileBar color="whitesmoke"/>
      <NavList>
        <NavItem>
          Movies
        </NavItem>
        <NavItem>
          Watch List
        </NavItem>        
      </NavList>
      <div></div>
    </NavbarContainer>
  );
};


export default Navbar;
