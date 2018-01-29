import React, { Component } from "react";
import "./App.css";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { BrowserRouter as Router, Route } from "react-router-dom";

import AppBar from "./AppBar/AppBar";
import CardContainer from "./CardContainer/CardContainer";
import QuickCalculation from "./QuickCalculation/QuickCalculation";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <AppBar />
            <Route exact path="/" component={CardContainer} />
            <Route path="/quick" component={QuickCalculation} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
