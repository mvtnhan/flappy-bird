import React from "react";

import { screen } from "../constant";

import ImgForeBg from "../images/fg.png";

const ForeGround = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        width: `${`${screen.WIDTH}px`}`,
        height: `${`${screen.GROUND_HEIGHT}px`}`,
        background: `url(${ImgForeBg})`,
      }}
    />
  );
};

export default ForeGround;
