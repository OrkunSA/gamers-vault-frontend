const gameReducer = (state = { all: {} }, action) => {
  switch (action.type) {
    case "SET_GAMES":
      return {
        ...state,
        all: action.payload,
      };
    case "ADD_GAME_TO_COLLECTION":
      return {
        ...state,
        all: [...state.all, action.payload],
      };
    default:
      return state;
  }
};

export default gameReducer;
