import React from "react";
import styled from "styled-components";
import ImgTopPipe from "../images/pipe-top.png";
import ImgBottomPipe from "../images/pipe-bottom.png";

export default function Pipe() {
  return (
    <StyledPipe>
      <div className="TopPipe"></div>
      <div className="BottomPipe"></div>
    </StyledPipe>
  );
}

const StyledPipe = styled.div`
  > div {
    position: absolute;
    left: 150px;
    width: 52px;
    height: 200px;
  }
  .TopPipe {
    background: url(${ImgTopPipe});
    background-position: bottom;
  }

  .BottomPipe {
    top: 300px;
    background: url(${ImgBottomPipe});
  }
`;
