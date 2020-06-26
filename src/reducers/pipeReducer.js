import { actionType } from "../action";

const initialState = {
  leftPadding: 300,
  topPipes: [],
};

export default (state = initialState, { type } = {}) => {
  switch (type) {
    case actionType.PIPE_MOVING:
      return { ...state, leftPadding: state.leftPadding - 10 };

    case actionType.PIPE_GENERATE:
      const topPipeHeight = Math.round(Math.random() * 160) + 80;
      return { ...state, topPipes: [...state.topPipes, { topPipeHeight }] };

    case actionType.GAME_OVER:
      return initialState;

    default:
      return state;
  }
};
