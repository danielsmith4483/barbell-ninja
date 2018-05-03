import React, { Component } from "react";
import "Containers/App.css";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { ConnectedRouter } from "react-router-redux";
import { Route } from "react-router-dom";

import NavigationContainer from "Containers/NavigationContainer";
import CardContainer from "Containers/CardContainer";
import CalculatorContainer from "Containers/CalculatorContainer";
import RepMaxContainer from "Containers/RepMaxContainer";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <ConnectedRouter history={this.props.history}>
          <div>
            <Route component={NavigationContainer} />
            <Route exact path="/" component={CardContainer} />
            <Route path="/quick" component={CalculatorContainer} />
            <Route path="/rep-max" component={RepMaxContainer} />
          </div>
        </ConnectedRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
