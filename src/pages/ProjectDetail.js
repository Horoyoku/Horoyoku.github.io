import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ProjectState } from "../projectState";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

import YoutubeEmbed from "../components/YoutubeEmbed";

const Details = styled(motion.div)`
  color: #4a1e2b;
`;

const Project = styled.div`
  margin: auto;
  width: 50%;
  overflow: hidden;
  padding: 5rem 10rem;
`

const Headline = styled.div`
  margin: 0vh auto 5vh auto;
  position: relative;
  text-align: center;
  h2 {
    margin-bottom: 3rem;
    font-weight: 300;
    color: #000000
  }
  img {
    width: 100%;
    object-fit: cover;
  }
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    min-height: fit-content;
  }
`;

const MainImage = styled.div`
  img {
    width: 100%;
    height: auto;
    object-fit: scale-down;
    display: block;
    margin: 0 auto;
  }
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    min-height: fit-content;
    img {
      min-height: 10vh;
      height: 40vh;
    }
  }
`;

const ProjectBody = styled.div`
  text-align: justify;
  font-weight: 300;
  h3 {
    text-align: center;
    margin: 0px auto;
    font-size: 2rem;
    font-weight: 300;
  }
  img {
    width: auto;
    max-height: 25rem;
    display: block;
    margin: 2rem auto;
  }

  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    min-height: fit-content;
    img {
      min-height: 10vh;
      height: 40vh;
    }
  }
`;

const ProjectDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  console.log(url);
  const [projects] = useState(ProjectState);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const currentProject = projects.filter((stateProject) => stateProject.url === url);
    setProject(currentProject[0]);
  }, [projects, url]);

  return (
    <Details
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {project ? (
        <Project>
          <Headline>
            <h2>{project.title}</h2>
            <MainImage>
              <img src={project.mainImg} alt="project" />
            </MainImage>
          </Headline>
          <ProjectBody>
            <h3>About the project</h3>
            {(() => {
              if(project.description !== undefined)
              {
                return <p>{project.description}</p>
              }
            })()}

            {(() => {
              if(project.secondaryImg !== undefined){
                return <img src={project.secondaryImg} alt="project" />
              }
            })()}

            {(() => {
              if(project.context !== undefined){
                return <p>{project.context}</p>
              }
            })()}

            {(() => {
              if(project.video !== undefined){
                return <>
                  <YoutubeEmbed embedId={project.video}/>
                </>
              }
            })()}

            {(() => {
              if(project.contributions !== undefined){
                return <>
                  <p>Some of the things I worked on for this project are:</p>
                    <ul>
                      { project.contributions.map((item) => {
                        return <li>{item}</li>;
                      }) }
                    </ul>
                </>
              }
            })()}
          </ProjectBody>
        </Project>
      ) : (
        <h3>Sorry, the project you are looking is not available</h3>
      )}
      <ScrollTop />
    </Details>
  );
};

export default ProjectDetail;
