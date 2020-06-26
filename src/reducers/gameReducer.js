import { actionType } from "../action";
import { gameStatus } from "../constant";

export default (state = {}, { type } = {}) => {
  switch (type) {
    case actionType.GAME_START:
      return { ...state, status: gameStatus.PLAYING };

    case actionType.GAME_OVER:
      return { ...state, status: gameStatus.GAME_OVER };

    default:
      return state;
  }
};
