import React, { Component } from "react";
import "./AppBar.css";

import BaseAppBar from "material-ui/AppBar";

class AppBar extends Component {
  render() {
    return (
      <BaseAppBar
        title="Barbell Ninja"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
}

export default AppBar;
