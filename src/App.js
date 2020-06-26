import { Provider } from "react-redux";
import React from "react";

import Game from "./pages/Home";
import styled from "styled-components";

const App = ({ store }) => {
  return (
    <StyledApp>
      <Provider store={store}>
        <Game />
      </Provider>
    </StyledApp>
  );
};

export default App;

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
`;
