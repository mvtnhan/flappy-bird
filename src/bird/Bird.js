import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";

import ImgBird from "../images/bird.png";

const Bird = ({ top, rotate }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: top,
        left: 120,
        height: 26,
        width: 38,
        background: `url(${ImgBird})`,
        transform: `rotate(${rotate}deg)`,
        transition: "transform 100ms, top 300ms",
      }}
    />
  );
};

const mapStateToProps = ({ bird }) => ({ top: bird.top, rotate: bird.rotate });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Bird);

Bird.prototype = {
  top: PropTypes.number.isRequired,
  rotate: PropTypes.number.isRequired,
};
