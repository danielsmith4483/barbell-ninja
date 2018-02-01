import React, { Component } from "react";
import "Containers/App.css";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { BrowserRouter as Router, Route } from "react-router-dom";

import AppBar from "Containers/AppBar";
import CardContainer from "Containers/CardContainer";
import CalculatorContainer from "Containers/CalculatorContainer";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <AppBar />
            <Route exact path="/" component={CardContainer} />
            <Route path="/quick" component={CalculatorContainer} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
