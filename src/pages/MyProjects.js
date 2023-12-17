import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import lunarpunk from "../img/lunarpunk_11.png"
import excaliroot from "../img/excaliroot_11.png"
import bluey from "../img/Bluey_11.jpg"
// Animations
import { motion } from "framer-motion";

import styles from "../css/TimelineProjects.module.css";

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

const OurWork = () => {

  return (
    <Work 
    initial="hidden" 
    animate="show" 
    exit="exit"
    >

    <section class={styles.designSection}>
      <div class={styles.timelineProject}>

        <div class={styles.timelineComponent + " " + styles.timelineImage}>
          <img src={bluey} alt="Bluey"/>
        </div>

        <div class={styles.timelineMiddle}>
            <div class={styles.timelineCircle}></div>
        </div>
        
        <div class={styles.timelineComponent + " " + styles.timelineContent}>
          <h3>Bluey: The Videogame</h3>
          <p>Videogame based on the hit TV series.</p>
        </div>

      </div>

      <div class={styles.timelineProject}>

        <div class={styles.timelineComponent + " " + styles.timelineContent}>
          <h3>Lunarpunk</h3>
          <p>Developed as a Master's degree final project.</p>
          <Link style={{display: 'inline-block'}} to="/project/lunarpunk">
            <button>See more</button>
          </Link>
        </div>

        <div class={styles.timelineMiddle}>
            <div class={styles.timelineCircle}></div>
        </div>

        <div class={styles.timelineComponent + " " + styles.timelineImage}>
        <img src={lunarpunk} alt="Lunarpunk"/>
        </div>

      </div>

      <div class={styles.timelineProject}>

        <div class={styles.timelineComponent + " " + styles.timelineImage}>
          <img src={excaliroot} alt="Excaliroot"/>
        </div>

        <div class={styles.timelineMiddle}>
          <div class={styles.timelineCircle}></div>
        </div>

        <div class={styles.timelineComponent + " " + styles.timelineContent}>
          <h3>Excaliroot</h3>
          <p>Developed for the Global Game Jam of 2023.</p>
          <Link style={{display: 'inline-block'}} to="/project/excaliroot">
            <button>See more</button>
          </Link>
        </div>

      </div>
        
    </section>

    </Work>
  );
};

export default OurWork;
