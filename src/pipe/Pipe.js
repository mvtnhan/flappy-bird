import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";

import { screen, pipeInfo } from "../constant";

import ImgBottomPipe from "../images/pipe-bottom.png";
import ImgTopPipe from "../images/pipe-top.png";

const Pipe = ({ leftPadding, topPipes }) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {topPipes.map(({ topPipeHeight }, index) => (
        <div
          key={index}
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: pipeInfo.WIDTH,
              left: leftPadding + index * pipeInfo.HORIZONTAL_DISTANCE,
              transition: "left 300ms",
              top: 0,
              height: topPipeHeight,
              background: `url(${ImgTopPipe})`,
              backgroundPosition: "bottom",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: pipeInfo.WIDTH,
              left: leftPadding + index * pipeInfo.HORIZONTAL_DISTANCE,
              transition: "left 300ms",
              top: topPipeHeight + pipeInfo.VERTICAL_DISTANCE,
              height:
                screen.HEIGHT - topPipeHeight - pipeInfo.VERTICAL_DISTANCE,
              background: `url(${ImgBottomPipe})`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = ({ pipe }) => ({
  leftPadding: pipe.leftPadding,
  topPipes: pipe.topPipes,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Pipe);

Pipe.prototype = {
  leftPadding: PropTypes.number.isRequired,
  topPipes: PropTypes.number.isRequired,

  pipeInfo: PropTypes.elementType.isRequired,
  VERTICAL_DISTANCE: PropTypes.number.isRequired,
  HORIZONTAL_DISTANCE: PropTypes.number.isRequired,

  screen: PropTypes.elementType.isRequired,
  HEIGHT: PropTypes.number.isRequired,
};
