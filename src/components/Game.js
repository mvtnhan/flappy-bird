import React from "react";
import styled from "styled-components";
import Bird from "./Bird.js";
import Pipe from "./Pipe.js";
import ForeGround from "./ForeGround.js";
import ImgBg from "../images/bg.png";

export default function Game() {
  return (
    <StyledGame>
      <Bird />
      <Pipe />
      <ForeGround />
    </StyledGame>
  );
}

const StyledGame = styled.div`
  position: relative;
  width: 288px;
  height: 512px;
  background: url(${ImgBg});
`;
