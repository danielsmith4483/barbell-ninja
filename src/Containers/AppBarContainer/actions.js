export const toggleDrawer = () => {
  return {
    type: "TOGGLE_DRAWER"
  };
};

export const setDrawerState = drawerState => {
  return {
    type: "SET_DRAWER_STATE",
    drawerState
  };
};
