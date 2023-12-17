import React from "react";
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

import linkedin from "../img/linkedin.svg";
import github from "../img/github.svg";
import itchio from "../img/itchio.svg";
import cv from "../img/cv.svg";
import cvDocument from "../documents/cv.pdf";

import styles from "../css/TimelineExperience.module.css";

const Content = styled(motion.div)`
  margin: auto;
  width: 50%;
  padding: 5rem;
  padding-bottom: 1rem;
  height: 90vh;

  font-weight: 300;

  display: flex;

  flex-direction: row;

  justify-content: space-evenly;
  
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
    flex-direction: column-reverse;

    height: 100%;
    width: 100%;
    h2 {
      font-size: 3rem;
    }
  }
`;

const Paragraph = styled.div`  
flex: 1;
text-align: justify;
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
  padding-right: 1rem;
  p {
    padding: 2rem;
  }
}
/* Mobile devices iPhone, Pixel */
@media only screen and (min-width: 320px) and (max-width: 539px) {
  padding: 0;
  h2 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1rem;
  }
  button {
    margin: 0 auto;
  }
}
`;

const Icon = styled.img`  
{
  height: 50px;
  margin: 5px;
}
`;

const Links = styled.div` 
{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
  
  background-color: #e6f0e6;
  box-shadow: 1px 1px 5px #787979;
  border-radius: 15px;
  
  width: fit-content;
  padding: 10px 20px;
  margin: auto;

  p {
    font-weight: 350;
  }

  @media only screen and (min-width: 320px) and (max-width: 539px) {
    margin-top: 10px;
    margin-bottom: 5px;
  }
}
`;

const AboutMe = () => {

  return (
    <Content variants={pageAnimation}
    initial="hidden"
    animate="show"
    exit="exit">

    <div class={styles.timelineExp}>
        <div class={styles.rbContainer}>
          <ul class={styles.rb}>
          
            <li class={styles.rbItem} ng-repeat="itembx">
              <div class={styles.timestamp}>
                <div class={styles.job}>
                Game Programmer
                </div>
                <div class={styles.place}>
                Artax Games
                </div>
                <div class={styles.period}>
                March 2023 - Ongoing
                </div>
              </div>
            </li>

            <li class={styles.rbItem} ng-repeat="itembx">
              <div class={styles.timestamp}>
                <div class={styles.job}>
                Master's Degree in Video Game Development
                </div>
                <div class={styles.place}>
                Complutense University of Madrid
                </div>
                <div class={styles.period}>
                2022 - 2023
                </div>
              </div>
            </li>

            <li class={styles.rbItem} ng-repeat="itembx">
              <div class={styles.timestamp}>
                <div class={styles.job}>
                Computer Science Degree
                </div>
                <div class={styles.place}>
                University of Santiago de Compostela
                </div>
                <div class={styles.period}>
                2018 - 2022
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <Paragraph>
        Hi!
        <br/>
        <br/>
        My name is Carmen, and I'm a computer engineer in the world of game development. 
        I grew up playing games on the DS, PS2 and Wii.
        <br/>
        <br/>
        As I got older, I grew interested in computer science, so I decided to study this subject in the University of Santiago de Compostela.
        Combining two of the things that I was most interested in, I chose to apply for the Master's Degree of Game Development of the Complutense University of Madrid.
        <br/>
        <br/>
        Some of my favorite games are:
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
        <br/>
        If you are interested in my profile, and want to contact me about anything, consider reaching out to me!
        <br/>
        <br/>
        <Links>
          <a href="https://www.linkedin.com/in/carmen-ocalou/"><Icon src={linkedin}/></a>
          <a href="https://github.com/ocalou"><Icon src={github}/></a>
          <a href="https://horoyo.itch.io/"><Icon src={itchio}/></a>
          <a href={cvDocument} target="_blank" rel="noopener noreferrer"> <Icon src={cv}/></a> 
        </Links>
      </Paragraph>  
    </Content>
  );
};

export default AboutMe;
