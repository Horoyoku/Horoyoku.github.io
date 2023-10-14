import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const VideoResponsive = styled.div`
  width: 100%;
  padding-top: 15px;
  iframe{
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 20px;
    box-shadow: 1px 1px 10px #787979;
  }
`;
  

const YoutubeEmbed = ({ embedId }) => (
  <VideoResponsive>
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </VideoResponsive>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
