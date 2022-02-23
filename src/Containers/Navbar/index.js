import React from 'react';
import { NavbarContainer, NavList, NavItem } from './NavbarElements.js';
import ProfileBar from '../ProfileBar';
import { Marginer } from '../../Components/Marginer';

const Navbar = () => {
  return (
    <NavbarContainer>
      <ProfileBar color="whitesmoke"/>
      {/* <Marginer horizontal="30px"/> */}
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
