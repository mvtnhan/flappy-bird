import { combineReducers } from "redux";

import birdReducer from "./birdReducer";
import gameReducer from "./gameReducer";
import pipeReducer from "./pipeReducer";

export default combineReducers({
  bird: birdReducer,
  game: gameReducer,
  pipe: pipeReducer,
});
