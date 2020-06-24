import React from "react";
import styled from "styled-components";
import ImgForeBg from "../images/fg.png";

export default function ForeGround() {
  return <StyledForeGround></StyledForeGround>;
}

const StyledForeGround = styled.div`
  position: absolute;
  bottom: 0;
  width: 288px;
  height: 108px;
  background: url(${ImgForeBg});
`;
