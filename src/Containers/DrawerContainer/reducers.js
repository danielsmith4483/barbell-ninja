export const drawerOpened = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_DRAWER":
      return !state;
    case "SET_DRAWER_STATE":
      return action.drawerState;
    default:
      return state;
  }
};
