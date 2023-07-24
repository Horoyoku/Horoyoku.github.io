import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation, fade } from "../animation";
import background from "../img/background.png"

const Navbar = styled.nav`
  min-height: 5vh;
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
      border-radius: 50px;
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
      border-radius: 25px;
  }

  ul li a:hover {
      color: #24b124;
      font-weight: 600;
  }

  ul li a.active {
      color: #ffffff;
      background-image: linear-gradient(135deg, #5dd167 40%, #1787ff);
      font-weight: 600;
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
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1rem;
    background-image: url(${background});
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    z-index: 5000;
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

const Navmenu = styled(motion.div)`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  height: 100%;
  width: 100vw;
  overflow: hidden;
  position: fixed;
  z-index: 5001;
  font-size: 5rem;
  transition: 0.5s ease-in-out;
  ul {
    list-style: none;
    li {
      padding-left: 1.6rem;
      position: relative;
      color: #ffffff;
    }
  }
`;

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <Navbar>
        
        {/*
        <h1>
          <NavLink id="logo" to="/">
            <img src={logo}/>
          </NavLink>
        </h1>
        */}
        
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
        <div className="box" onClick={() => setIsClicked(!isClicked)}>
          <div className={`btn ${isClicked ? "active" : "not-active"}`}>
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
          </div>
        </div>
      </NavbarMobile>
      {isClicked ? (
        <Navmenu
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <ul>
            <li>
              <NavLink
                className="menu-link"
                to="/"
                onClick={() => setIsClicked(!isClicked)}
                style={(isClicked) => ({
                  color: isClicked && path === "/" ? "#f67280" : "#eee",
                })}
              >
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menu-link"
                to="/projects"
                onClick={() => setIsClicked(!isClicked)}
                style={(isClicked) => ({
                  color: isClicked && path === "/projects" ? "#f67280" : "#eee",
                })}
              >
              </NavLink>
            </li>
          </ul>
        </Navmenu>
      ) : (
        ""
      )}
    </>
  );
};

export default Nav;
