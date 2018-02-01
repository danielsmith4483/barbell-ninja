export const chosenWeight = (state = 0, action) => {
  switch (action.type) {
    case "SET_WEIGHT":
      return action.chosenWeight;
    default:
      return state;
  }
};

export const availablePlates = () => {
  return [
    { weight: 45, count: 8 },
    { weight: 35, count: 2 },
    { weight: 25, count: 2 },
    { weight: 10, count: 4 },
    { weight: 5, count: 4 },
    { weight: 2.5, count: 4 },
    { weight: 1.25, count: 2 }
  ];
};
