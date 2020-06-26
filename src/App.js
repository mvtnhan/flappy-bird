import { Provider } from "react-redux";
import React from "react";

import Home from "./pages/Home";

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
