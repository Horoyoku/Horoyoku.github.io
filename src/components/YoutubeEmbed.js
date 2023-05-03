import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const VideoResponsive = styled.div`
    iframe{
        display: block;
        margin: 0 auto;
    }
`;
  

const YoutubeEmbed = ({ embedId }) => (
  <VideoResponsive>
    <iframe
      width="853"
      height="480"
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
