import { connect } from "react-redux";
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

import { actionType } from "../action";
import {
  gameStatus,
  pipeInfo,
  keyCode,
  screen,
  interval,
  birdInfo,
} from "../constant";
import Bird from "../bird/Bird";
import ForeGround from "./ForeGround";
import Pipe from "../pipe/Pipe";

import ImgBg from "../images/bg.png";

let birdIntervalID;
let pipeMoveIntervalID;
let pipeGeneratorIntervalID;

class Game extends Component {
  handleKeyPress = (e) => {
    if (e.keyCode === keyCode.SPACE) {
      this.props.fly();
    }

    this.props.start();
  };

  componentDidMount() {
    document.addEventListener("keypress", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeyPress);
  }

  render() {
    return (
      <StyledGame>
        <Bird />
        <Pipe />
        <ForeGround />
      </StyledGame>
    );
  }
}

const fly = () => {
  return (dispatch) => {
    dispatch({ type: actionType.BIRD_FLY });
  };
};

const start = () => {
  return (dispatch, getState) => {
    const { status } = getState().game;

    if (status !== gameStatus.PLAYING) {
      birdIntervalID = setInterval(() => {
        dispatch({ type: actionType.BIRD_FALL });
        check(dispatch, getState);
      }, interval.BIRD_FALL);

      pipeMoveIntervalID = setInterval(() => {
        dispatch({ type: actionType.PIPE_MOVE });
        check(dispatch, getState);
      }, interval.PIPE_MOVE);

      pipeGeneratorIntervalID = setInterval(() => {
        dispatch({ type: actionType.PIPE_GENERATE });
      }, interval.PIPE_GENEGRATE);

      dispatch({ type: actionType.GAME_START });
    }
  };
};

const check = (dispatch, getState) => {
  const { game, bird, pipe } = getState();

  if (game.status === gameStatus.GAME_OVER) {
    clearInterval(birdIntervalID);
    clearInterval(pipeMoveIntervalID);
    clearInterval(pipeGeneratorIntervalID);
  }

  const pipePosition = pipe.topPipes
    .map(({ topPipeHeight }, index) => {
      // x1, y1: bottom left point of top pipe
      // x2, y2: top right point of bottom pipe
      return {
        x1: pipe.leftPadding + index * pipeInfo.HORIZONTAL_DISTANCE,
        y1: topPipeHeight,
        x2: pipe.leftPadding + index * pipeInfo.HORIZONTAL_DISTANCE,
        y2: topPipeHeight + pipeInfo.VERTICAL_DISTANCE,
      };
    })
    .filter(({ x1 }) => x1 > 0 && x1 < screen.WIDTH);

  // if the bird touches the ground
  if (bird.top > screen.HEIGHT - screen.GROUND_HEIGHT) {
    dispatch({ type: actionType.GAME_OVER });
  }

  if (pipePosition.length) {
    const { x1, y1, x2, y2 } = pipePosition[0];
    // if the bird touches the pipes
    if (
      (x1 < birdInfo.LEFT + 19 &&
        birdInfo.LEFT + 19 < x1 + pipeInfo.WIDTH &&
        bird.top + 13 < y1) ||
      (x2 < birdInfo.LEFT + 19 &&
        birdInfo.LEFT + 19 < x2 + pipeInfo.WIDTH &&
        bird.top + 13 > y2)
    ) {
      dispatch({ type: actionType.GAME_OVER });
    }
  }
};

const mapStateToProps = ({ game }) => ({ status: game.status });
const mapDispatchToProps = { start, fly };
export default connect(mapStateToProps, mapDispatchToProps)(Game);

start.prototype = {
  status: PropTypes.elementType.isRequired,
};

check.prototype = {
  game: PropTypes.elementType.isRequired,
  bird: PropTypes.elementType.isRequired,
  pipe: PropTypes.elementType.isRequired,
  pipeInfo: PropTypes.elementType.isRequired,
  screen: PropTypes.elementType.isRequired,
  topPipeHeight: PropTypes.number.isRequired,
};

const StyledGame = styled.div`
  position: relative;
  width: ${`${screen.WIDTH}px`};
  height: ${`${screen.HEIGHT}px`};
  background: url(${ImgBg});
  overflow: hidden;
`;
