export const chosenWeight = (state = 0, action) => {
  switch (action.type) {
    case "SET_WEIGHT":
      console.log("hello");
      return action.chosenWeight;
    default:
      return state;
  }
};
