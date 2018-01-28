import React, { Component } from "react";
import "./App.css";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import NavigationBar from "./NavigationBar/NavigationBar";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <NavigationBar />
      </MuiThemeProvider>
    );
  }
}

export default App;
