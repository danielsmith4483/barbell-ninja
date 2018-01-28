import React, { Component } from "react";
import "./App.css";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import AppBar from "./AppBar/AppBar";
import CardContainer from "./CardContainer/CardContainer";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar />
        <CardContainer />
      </MuiThemeProvider>
    );
  }
}

export default App;
