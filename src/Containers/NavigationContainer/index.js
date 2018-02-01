import React, { Component } from "react";

import { connect } from "react-redux";
import { toggleDrawer } from "Containers/NavigationContainer/actions";

import { ConnectedRouter } from "react-router-redux";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

import AppBar from "Containers/AppBar";

const mapStateToProps = state => {
  return {
    drawerOpened: state.drawerOpened
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleDrawer: () => dispatch(toggleDrawer())
  };
};

class NavigationContainer extends Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <Route component={AppBar} />
      </ConnectedRouter>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavigationContainer)
);
