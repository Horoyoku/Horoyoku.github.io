import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import lunarpunk from "../img/lunarpunkLogo.png"
import excaliroot from "../img/excaliroot.png"
// Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  photoAnimation,
  fade,
  lineAnimation,
  slider,
  sliderContainer,
} from "../animation";
import { useScroll } from "../hooks/useScroll";
import ScrollTop from "../components/ScrollTop";

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background-color: #f7f7f7;
  h2 {
    padding: 1rem 0;
  }
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
  margin: 0vh 20vh;
  .line {
    height: 0.5rem;
    background-color: #f67280;
    margin-bottom: 3rem;
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

// Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background-color: #ffe5b4;
  z-index: 2;
`;

const OurWork = () => {
  const [element, controls] = useScroll();

  return (
    <Work initial="hidden" animate="show" exit="exit">
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
      </motion.div>

      <Project>
        <motion.h2 variants={fade}>Lunarpunk</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link className="non-styled-link" to="/project/lunarpunk">
          <motion.img variants={photoAnimation} src={lunarpunk} alt="Lunarpunk" />
        </Link>
      </Project>


      <Project
        variants={fade}
        animate={controls}
        initial="hidden"
        ref={element}>

        <h2>Excaliroot</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link className="non-styled-link" to="/project/excaliroot">
          <motion.img variants={photoAnimation} src={excaliroot} alt="Excaliroot" />
        </Link>
      </Project>


      <ScrollTop />
    </Work>
  );
};

export default OurWork;
