import React, { Component } from "react";
import "Containers/App.css";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { ConnectedRouter } from "react-router-redux";
import { Route } from "react-router-dom";

import AppBar from "Containers/AppBar";
import CardContainer from "Containers/CardContainer";
import CalculatorContainer from "Containers/CalculatorContainer";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <ConnectedRouter history={this.props.history}>
          <div>
            <Route component={AppBar} />
            <Route exact path="/" component={CardContainer} />
            <Route path="/quick" component={CalculatorContainer} />
          </div>
        </ConnectedRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
