import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import ImgBird from "../images/bird.png";

const Bird = ({ top, rotate }) => {
  return <StyledBird top={top} rotate={rotate} />;
};

const mapStateToProps = ({ bird }) => ({ top: bird.top, rotate: bird.rotate });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Bird);

Bird.prototype = {
  top: PropTypes.number.isRequired,
  rotate: PropTypes.number.isRequired,
};

const StyledBird = styled.div`
  position: absolute;
  top: ${({ top }) => `${top}px`};
  left: 120px;
  height: 26px;
  width: 38px;
  background: url(${ImgBird});
  transform: ${({ rotate }) => `rotate(${rotate}deg)`};
  transition: transform 100ms, top 300ms;
`;
