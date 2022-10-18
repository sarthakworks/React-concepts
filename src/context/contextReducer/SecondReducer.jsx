let SecondReducer = (state, action) => {
  switch (action.type) {
    case "RESET":
      return initialState;
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
