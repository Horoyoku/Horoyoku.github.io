import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ProjectState } from "../projectState";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

const Details = styled(motion.div)`
  color: #4a1e2b;
`;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    min-height: fit-content;
  }
`;

const MainImage = styled.div`
  img {
    width: 80%;
    height: 50%;
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
  margin: 0rem 0rem 10rem 0rem;
  p, ul {
    margin: 5px 10%;
  }
  h3 {
    text-align: center;
    margin: 0px auto;
    font-size: 2rem;
    font-weight: 500;
  }
  img {
    width: 25%;
    height: 25%;
    display: block;
    margin: 0 auto;
  }
  video{
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
        <div>
          <Headline>
            <h2>{project.title}</h2>
            <MainImage>
              <img src={project.mainImg} alt="project" />
            </MainImage>
          </Headline>
          <ProjectBody>
            <h3>Sobre el proyecto</h3>
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
                  <p>En el siguiente enlace se puede ver un vídeo del juego:</p>
                  <video src={project.video} width="750" height="500" controls></video>
                </>
              }
            })()}

            {(() => {
              if(project.contributions !== undefined){
                return <>
                  <p>En este juego, me encargué principalmente de:</p>
                    <ul>
                      { project.contributions.map((item) => {
                        return <li>{item}</li>;
                      }) }
                    </ul>
                </>
              }
            })()}
          </ProjectBody>
        </div>
      ) : (
        <h3>Sorry, the project you are looking is not available</h3>
      )}
      <ScrollTop />
    </Details>
  );
};

export default ProjectDetail;
