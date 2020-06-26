import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { screen, pipeInfo } from "../constant";

import ImgBottomPipe from "../images/pipe-bottom.png";
import ImgTopPipe from "../images/pipe-top.png";

const Pipe = ({ leftPadding, topPipes }) => {
  return (
    <StyledPipe>
      {topPipes.map(({ topPipeHeight }, index) => (
        <div className="PipeWrapper" key={index}>
          <StyledTopPipe
            topPipeHeight={topPipeHeight}
            index={index}
            leftPadding={leftPadding}
          />
          <StyledBottomPipe
            topPipeHeight={topPipeHeight}
            index={index}
            leftPadding={leftPadding}
          />
        </div>
      ))}
    </StyledPipe>
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

const StyledPipe = styled.div`
  position: relative;

  .PipeWrapper {
    position: relative;
  }
`;

const StyledSharedPipe = styled.div`
  position: absolute;
  width: ${`${pipeInfo.WIDTH}px`};
  left: ${({ leftPadding, index }) =>
    `${leftPadding + index * pipeInfo.HORIZONTAL_DISTANCE}px`};
  transition: left 300ms;
`;

const StyledTopPipe = styled(StyledSharedPipe)`
  top: 0;
  height: ${({ topPipeHeight }) => `${topPipeHeight}px`};
  background: url(${ImgTopPipe});
  background-position: bottom;
`;

const StyledBottomPipe = styled(StyledSharedPipe)`
  top: ${({ topPipeHeight }) =>
    `${topPipeHeight + pipeInfo.VERTICAL_DISTANCE}px`};
  height: ${({ topPipeHeight }) =>
    `${screen.HEIGHT - topPipeHeight - pipeInfo.VERTICAL_DISTANCE}px`};
  background: url(${ImgBottomPipe});
`;
