import React, { Component } from "react";
import "./NavigationBar.css";

import AppBar from "material-ui/AppBar";

class NavigationBar extends Component {
  render() {
    return (
      <AppBar
        title="Barbell Ninja"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
}

export default NavigationBar;
