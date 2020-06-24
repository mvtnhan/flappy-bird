import React from "react";
import styled from "styled-components";
import ImgBird from "../images/bird.png";

export default function Bird() {
  return <StyledBird></StyledBird>;
}

const StyledBird = styled.div`
  position: absolute;
  top: 250px;
  left: 120px;

  height: 26px;
  width: 38px;
  background: url(${ImgBird});
`;
