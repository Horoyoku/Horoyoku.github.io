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
  slider,
  sliderContainer,
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
    padding: 2.5rem 1rem;
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
    padding: 3rem 2.5rem;
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    padding: 2.5rem 1rem;
    h2 {
      font-size: 3rem;
      text-align: center;
    }
  }
`;

const Project = styled(motion.div)`
  padding-bottom: 4vh;
  height: 25rem;
  justify-self: center;
  display: flex;
	flex-direction: column;
  h2 {
    padding: 1rem 0;
    font-weight: 300;
  }
  .line {
    height: 0.5rem;
    background-color: #f67280;
    margin-bottom: 3rem;
  }
  
  a {
    margin: auto;
    flex: 1;
  }

  a div {
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: black;
    display: flex;
    align-contents: center;
  }
  
  img {
    width: 100%;
    height: auto;
    object-fit: scale-down;
    @media only screen and (min-width: 821px) and (max-width: 1200px) {
      height: 30vh;
    }
    /* Kindel and iPad tablet  */
    @media only screen and (min-width: 540px) and (max-width: 820px) {
      height: 50vh;
    }
    /* Mobile devices iPhone, Pixel */
    @media only screen and (min-width: 320px) and (max-width: 539px) {
      object-fit: cover;
      height: 70vh;
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
        <Project>
          <motion.h2 variants={fade}>Lunarpunk</motion.h2>
          <Link className="non-styled-link" to="/project/lunarpunk">
            <div>
              <motion.img variants={photoAnimation} src={lunarpunk} alt="Lunarpunk" />
            </div>
          </Link>
        </Project>

        <Project>
          <motion.h2 variants={fade}>Excaliroot</motion.h2>
            <Link className="non-styled-link" to="/project/excaliroot">
              <div>
              <motion.img variants={photoAnimation} src={excaliroot} alt="Excaliroot" />
              </div>
            </Link>
        </Project>
      </Grid>
    </Work>
  );
};

export default OurWork;
