import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import background from "../img/background.png"

import { ReactComponent as Home } from "../img/home.svg"
import { ReactComponent as Projects } from "../img/gameboy.svg"
import { ReactComponent as AboutMe } from "../img/user-id.svg"

const Navbar = styled.nav`
  height: 10vh;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  padding: 1rem 10rem;
  background-image: url(${background});
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 5000;
  body {
    margin: 0;
    padding: 0;
    background-color: #dcdc39;
    font-family: 'Open Sans', Verdana, Geneva, Tahoma, sans-serif;
  }

  .nav, ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav {
    position: relative;
    background-color: #fff;
    padding: 10px;
    transition: 0.5s;
    border-radius: 15px;
    box-shadow: 0 8px 15px rgba(0,0,0,.2);
  }

  ul {
    margin: 0;
    padding: 0;
    width: 400px;
    transition: 0.5s;
  }

  ul li {
    list-style: none;
    display: inline-block;
    margin: 0 5px;
    padding 0px;
  }

  ul li a {
    text-decoration: none;
    color: #7d7d7d;
    text-transform: uppercase;
    font-weight: 450;
    transition: 0.5s;
    padding: 10px;
    border-radius: 10px;
  }

  ul li a:hover {
    color: #65a268;
  }

  ul li a.active {
    color: #ffffff;
    background-image: linear-gradient(135deg, #65a268 40%, #65a268);
  }

  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    padding: 2rem;
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    display: none;
    padding: 1rem;
    h1 {
      font-size: 0.5rem;
    }
    ul {
      li {
        font-size: 0.5em;
        display: none;
      }
    }
  }
`;

const NavbarMobile = styled.div`
  display: none;
  
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    display: flex;
    overflow: hidden;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background-image: url(${background});

    position:sticky;
    
    padding: 20px;
    z-index: 3;

    .separator{
      height: 100px;
      display: block;
    }

    .nav {
      position: relative;
      background-color: #fff;
      transition: 0.5s;
      border-radius: 30px;
      margin: auto;
      box-shadow: 0 8px 15px rgba(0,0,0,.2);
    }

    ul {
      margin: 0;
      padding: 0;
      transition: 0.5s;
      display: flex;
    }

    ul li {
      list-style: none;
      display: inline-block;
      margin: 0 5px;
      padding 0px;
    }

    ul li a {
      text-decoration: none;
      color: #7d7d7d;
      text-transform: uppercase;
      font-weight: 450;
      transition: 0.5s;
      padding: 10px;
      border-radius: 25px;
    }
    
  }
`;

const Nav = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <Navbar>
        <div class="nav">
          <ul>
            <li>
              <NavLink className="styled-link" to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="styled-link" to="/projects">
                My Projects
              </NavLink>
            </li>
            <li>
              <NavLink className="styled-link" to="/AboutMe">
                About Me
              </NavLink>
            </li>
          </ul>
        </div>
      </Navbar>
      {/* Mobile responsive sidebar opens up on mobile devices */}
      <NavbarMobile>
        <div class="separator"/>
        <div class="nav">
          <ul>
            <li>
              <NavLink className="styled-link" to="/" exact>
              <Home stroke="#65a268"/>
              </NavLink>
            </li>
            <li>
              <NavLink className="styled-link" to="/projects">
              <Projects stroke="#65a268" current="#65a268"/>
              </NavLink>
            </li>
            <li>
              <NavLink className="styled-link" to="/AboutMe">
              <AboutMe stroke="#65a268"/>
              </NavLink>
            </li>
          </ul>
        </div>
      </NavbarMobile>
    </>
  );
};

export default Nav;
