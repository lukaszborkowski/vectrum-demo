import React from "react";
import PropTypes from "prop-types";
import "./BlurryGradientBackground.css";

export const BlurryGradientBackground = ({ top, left, right, bottom, className = "" }) => {
  const positions = `${top} ${left} ${right} ${bottom}`;

  return (
    <div
      className={`absolute ${positions} animated-gradient blurred-background ${className}`}
    ></div>
  );
};

BlurryGradientBackground.propTypes = {
  top: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
  className: PropTypes.string,
};

BlurryGradientBackground.defaultProps = {
  top: "inset-0",
  left: "inset-0",
  right: "inset-0",
  bottom: "inset-0",
};
