import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import birdReducer from "./bird/reducer";
import gameReducer from "./game/reducer";
import pipeReducer from "./pipe/reducer";

const rootReducer = combineReducers({
  bird: birdReducer,
  game: gameReducer,
  pipe: pipeReducer,
});

export default () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
