import { actionType } from "../action";

const initialState = {
  top: 250,
  rotate: 0,
};

export default (state = initialState, { type } = {}) => {
  switch (type) {
    case actionType.BIRD_FLY:
      return { ...state, top: state.top - 50, rotate: -20 };

    case actionType.BIRD_FALL:
      return { ...state, top: state.top + 20, rotate: 0 };

    case actionType.GAME_OVER:
      return initialState;

    default:
      return state;
  }
};
