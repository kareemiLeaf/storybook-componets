import React from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";

export default function VideoPlayer({
  url,
  playing,
  loop,
  controls,
  muted,
  width,
  height,
}) {
  return (
    <ReactPlayer
      url={url}
      playing={playing}
      loop={loop}
      controls={controls}
      muted={muted}
      width={width}
      height={height}
    />
  );
}

VideoPlayer.propTypes = {
  url: PropTypes.string,
  playing: PropTypes.bool,
  loop: PropTypes.bool,
  controls: PropTypes.bool,
  muted: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
};

VideoPlayer.defaultProps = {
  url:
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  playing: false,
  loop: false,
  controls: false,
  muted: false,
  width: "100%",
  height: "100%",
};
