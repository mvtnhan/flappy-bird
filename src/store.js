import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import birdReducer from "./bird/reducer";
import gameReducer from "./game/reducer";
import pipeReducer from "./pipe/reducer";

const rootReducer = combineReducers({
  bird: birdReducer,
  game: gameReducer,
  pipe: pipeReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};
