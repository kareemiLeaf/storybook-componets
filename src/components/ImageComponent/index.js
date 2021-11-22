import React from "react";
import PropTypes from "prop-types";

export default function ImageComponent({
  height,
  width,
  src,
  objectFit,
  alt = "image",
}) {
  return (
    <div style={{ height, width }}>
      <img
        src={src}
        style={{
          height: "100%",
          width: "100%",
          objectFit: objectFit,
        }}
        alt={alt}
      />
    </div>
  );
}

ImageComponent.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  src: PropTypes.string,
  objectFit: PropTypes.string,
  alt: PropTypes.string,
};

ImageComponent.defaultProps = {
  height: "400px",
  width: "400px",
  src: "https://picsum.photos/seed/picsum/200/300",
  objectFit: "contain",
  alt: "sample-img",
};
