import React from "react";
import styled from "styled-components";
import icon from "../img/icon.png";
import { Link } from "react-router-dom";
import { Layout, Description, ImageContainer, Hide } from "../styles";
// Animation
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";
import Wave from "./Wave";

const Header = styled(motion.div)`
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
    <Layout>
      <Description style={{ zIndex: 2 }}>
        <Header
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          <Hide>
            <motion.h2 variants={titleAnimation}>
              Hi! My name is
              <h2><span>Carmen</span></h2>
            </motion.h2>
          </Hide>

        </Header>

        <motion.p variants={fade}>
          Game developer
        </motion.p>

        <Link className="non-styled-link" to="/projects">
          <motion.button variants={fade}>My Projects</motion.button>
        </Link>
      </Description>
      <ImageContainer>
        <motion.img
          variants={photoAnimation}
          initial="hidden"
          animate="show"
          src={icon}
          alt="mainImage"
        />
      </ImageContainer>
      <Wave />
    </Layout>
  );
};

export default Introduction;
