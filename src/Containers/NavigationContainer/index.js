import React, { Component } from "react";

import { ConnectedRouter } from "react-router-redux";
import { Route } from "react-router-dom";

import AppBarContainer from "Containers/AppBarContainer";
import DrawerContainer from "Containers/DrawerContainer";

class NavigationContainer extends Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <div>
          <Route component={AppBarContainer} />
          <Route component={DrawerContainer} />
        </div>
      </ConnectedRouter>
    );
  }
}

export default NavigationContainer;
