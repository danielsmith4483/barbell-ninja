import React, { Component } from "react";
import "./App.css";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import AppBar from "./AppBar/AppBar";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar />
      </MuiThemeProvider>
    );
  }
}

export default App;
