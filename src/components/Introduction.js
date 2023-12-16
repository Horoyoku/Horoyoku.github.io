import React from "react";
import styled from "styled-components";
import photo from "../img/photo.jpg";
import { Link } from "react-router-dom";
import { Layout, Description, ImageContainer, Hide } from "../styles";
// Animation
import { motion } from "framer-motion";
import { fade, photoAnimation } from "../animation";

import styles from '../css/Circles.module.css';

const Header = styled.div`
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    h2 {
      font-size: 3rem;
    }
  }
`;


const Introduction = () => {
  // Framer-motion variant
  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
        staggerChildren: 0.8,
        when: "afterChildren",
      },
    },
  };

  return (
    <>
    <Layout>
      <Description style={{ zIndex: 2 }}>
        <Header>
        <h2>
          Hi! My name is <br/>
          <span>Carmen</span>
        </h2>
        </Header>

        <p>
          Game developer
        </p>

        <Link style={{display: 'inline-block'}} to="/projects">
          <button variants={fade}>My Projects</button>
        </Link>
      </Description>
      <ImageContainer>
        <motion.img
          variants={photoAnimation}
          initial="hidden"
          animate="show"
          src={photo}
          alt="mainImage"
        />
      </ImageContainer>
    </Layout>

    <div class={styles.area} >
    <ul class={styles.circles}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
    </ul>
    </div >
    </>
  );
};

export default Introduction;
