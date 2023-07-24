import React from "react";
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

import linkedin from "../img/linkedin.png";

const Content = styled(motion.div)`
  margin: auto;
  width: 30%;
  padding: 5rem 0rem;

  font-weight: 300;
  
  @media only screen and (min-width: 821px) and (max-width: 1200px) {
    padding: 3rem 5rem;
    width: 100%;
  }
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    padding: 3rem 2.5rem;
    width: 100%;
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    padding: 2.5rem 1rem;
    width: 100%;
    h2 {
      font-size: 3rem;
      text-align: center;
    }
  }
`;

const Paragraph = styled.div`  
flex: 1;
text-align: justify;
margin-bottom: 1rem;
h2 {
  font-weight: lighter;
  color: #000000;
}
p {
  color: #4a1e2b;
}
a {
  all: initial;
  cursor: pointer;
}
a::hover {
  all: initial;
}
a::after {
  all: initial;
}

ul li {
  padding: 3px; 
}

/* Kindel and iPad tablet  */
@media only screen and (min-width: 540px) and (max-width: 820px) {
  display: flex;
  flex-direction: column;
  flex: 0;
  align-items: center;
  padding-right: 1rem;
  p {
    padding: 2rem;
    text-align: center;
  }
}
/* Mobile devices iPhone, Pixel */
@media only screen and (min-width: 320px) and (max-width: 539px) {
  padding: 0;
  h2 {
    font-size: 2.5rem;
    text-align: center;
  }
  p {
    font-size: 1rem;
    text-align: center;
  }
  button {
    margin: 0 auto;
  }
}
`;

const AboutMe = () => {

  return (
    <Content variants={pageAnimation}
    initial="hidden"
    animate="show"
    exit="exit">
      <Paragraph>
        Hi!
      </Paragraph>
      <Paragraph>
        My name is Carmen, and I'm a computer engineer wanting to enter the world of game development. 
        I grew up playing games on the DS, PS2 and Wii.
      </Paragraph>
      <Paragraph>
        As I got older, I got interested in computer science, so I decided to study this subject in the University of Santiago de Compostela.
        Combining two of the things that I was most interested in, I chose to apply for the Master's Degree of Game Development of the Complutense University of Madrid.
      </Paragraph>
      <Paragraph>
        Some of my favorite games include:
        <ul>
          <li>
          Gravity Rush
          </li>
          <li>
          Hollow Knight
          </li>
          <li>
          Rain World
          </li>
          <li>
          Celeste
          </li>
        </ul>
      </Paragraph>
      <Paragraph>
        If you are interested in my profile, and want to contact me about anything, consider reaching out to me!
      </Paragraph>
      <Paragraph>
        <a href="https://www.linkedin.com/in/carmen-ocalou/"><img src={linkedin}/></a>
      </Paragraph>  
    </Content>
  );
};

export default AboutMe;
