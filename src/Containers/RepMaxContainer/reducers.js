export const chosenWeight = (state = 0, action) => {
  switch (action.type) {
    case "SET_WEIGHT":
      return action.chosenWeight;
    default:
      return state;
  }
};

export const chosenReps = (state = 0, action) => {
  switch (action.type) {
    case "SET_CHOSEN_REPS":
      return action.chosenReps;
    default:
      return state;
  }
};