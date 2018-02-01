import React, { Component } from "react";

import BaseAppBar from "material-ui/AppBar";
import TouchRipple from "material-ui/internal/TouchRipple";

import { connect } from "react-redux";
import { push } from "react-router-redux";
import { withRouter } from "react-router-dom";

const styles = {
  title: {
    cursor: "pointer"
  }
};

const mapDispatchToProps = dispatch => {
  return {
    changeRoute: url => dispatch(push(url)),
    dispatch
  };
};
class AppBarContainer extends Component {
  render() {
    return (
      <BaseAppBar
        title={
          <TouchRipple>
            <span style={styles.title}>Barbell Ninja</span>
          </TouchRipple>
        }
        onTitleClick={() => this.props.changeRoute("/")}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(AppBarContainer));
