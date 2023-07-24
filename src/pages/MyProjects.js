import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import lunarpunk from "../img/lunarpunkLogo.png"
import excaliroot from "../img/excaliroot.png"
// Animations
import { motion } from "framer-motion";
import {
  photoAnimation,
  fade,
} from "../animation";

const Work = styled(motion.div)`
  overflow: hidden;
  padding: 5rem 10rem;
  margin: 0rem;
  
  @media only screen and (min-width: 821px) and (max-width: 1200px) {
    padding: 3rem 5rem;
  }
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    padding: 3rem 2.5rem;
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    padding: 0rem 0rem;
    h2 {
      font-size: 3rem;
      text-align: center;
    }
  }
`;

const Grid = styled(motion.div)`
  margin: auto;
  width: 60%;

  display: grid;
  column-gap: 10%;
  grid-template-columns: 45% 45%;
  grid-template-rows: auto;
  text-align: center;
  
  @media only screen and (min-width: 821px) and (max-width: 1200px) {
    padding: 3rem 5rem;
  }
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    width: 100%;
    padding: 3rem 2.5rem;
    grid-template-columns: 100%;
    row-gap: 50px;
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    width: 100%;
    padding: 2.5rem 1rem;
    grid-template-columns: 100%;
    row-gap: 50px;
    h2 {
      font-size: 3rem;
      text-align: center;
    }
  }
`;

const Project = styled(motion.div)`
  padding: 30px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  height: 25rem;
  justify-self: center;
  display: flex;
  border-radius: 30px;
  background-color: #d6f1d6;
	flex-direction: column;
  h2 {
    padding: 1rem 0;
    font-weight: 450;
    font-size: 45px;
    color: black;
  }
  .line {
    height: 0.5rem;
    background-color: #f67280;
    margin-bottom: 3rem;
  }

  div {
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: black;
    border-radius: 30px;
    display: flex;
    align-contents: center;
  }
  
  img {
    width: 100%;
    height: auto;
    object-fit: scale-down;
    @media only screen and (min-width: 821px) and (max-width: 1200px) {
      width: 100%;
      height: auto;
    }
    /* Kindel and iPad tablet  */
    @media only screen and (min-width: 540px) and (max-width: 820px) {
      width: 100%;
      height: auto;
    }
    /* Mobile devices iPhone, Pixel */
    @media only screen and (min-width: 320px) and (max-width: 539px) {
      
      width: 100%;
      height: auto;
    }
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    margin-bottom: 0;
    .line {
      margin-bottom: 1rem;
    }
  }
`;

const OurWork = () => {

  return (
    <Work 
    initial="hidden" 
    animate="show" 
    exit="exit"
    >
      <Grid>
        
      <Link className="non-styled-link" to="/project/lunarpunk">
        <Project>
            <div>
              <motion.img variants={photoAnimation} src={lunarpunk} alt="Lunarpunk" />
            </div>
          <motion.h2 variants={fade}>Lunarpunk</motion.h2>
        </Project>
        </Link>

      <Link className="non-styled-link" to="/project/excaliroot">
        <Project>
              <div>
              <motion.img variants={photoAnimation} src={excaliroot} alt="Excaliroot" />
              </div>
          <motion.h2 variants={fade}>Excaliroot</motion.h2>
        </Project>
        </Link>

      </Grid>
    </Work>
  );
};

export default OurWork;
