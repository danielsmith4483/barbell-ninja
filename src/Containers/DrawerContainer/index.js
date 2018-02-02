import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Drawer from "material-ui/Drawer";

import {
  toggleDrawer,
  setDrawerState
} from "Containers/AppBarContainer/actions";

const mapStateToProps = state => {
  return {
    drawerOpened: state.drawerOpened
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleDrawer: () => dispatch(toggleDrawer()),
    setDrawerState: drawerState => dispatch(setDrawerState(drawerState)),
    dispatch
  };
};

class DrawerContainer extends Component {
  render() {
    return (
      <Drawer
        docked={false}
        width={200}
        open={this.props.drawerOpened}
        onRequestChange={open => this.props.setDrawerState(open)}
      />
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DrawerContainer)
);
