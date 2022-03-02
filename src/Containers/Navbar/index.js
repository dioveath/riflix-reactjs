import React from 'react';
import { NavbarContainer, NavList, NavItem } from './NavbarElements.js';
import ProfileBar from '../ProfileBar';

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  
  const linkStyle = {
    "textDecoration": "none"
  };

  return (
    <NavbarContainer>
      <ProfileBar color="whitesmoke"/>
      <NavList>
        <Link to="/" style={ linkStyle }>
          <NavItem active={ location.pathname === "/" ? true : false}>
            Movies
          </NavItem>
        </Link>
        <Link to="/movie/movieId" style = { linkStyle }>
          <NavItem active={ location.pathname === "/movie/something" ? true : false}>
            Watch List
          </NavItem>
        </Link>
      </NavList>
      <div></div>
    </NavbarContainer>
  );
};


export default Navbar;
