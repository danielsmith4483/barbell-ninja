import React, { Component } from "react";

import TextField from "material-ui/TextField";

import { connect } from "react-redux";

import { repMax } from 'rep-max';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

class RepMaxContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { chosenWeight: 0, chosenReps: 0 };

    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeReps = this.onChangeReps.bind(this);
  }

  onChangeWeight(event, newValue) {
    this.setState({ chosenWeight: newValue });
  }

  onChangeReps(event, newValue) {
    this.setState({ chosenReps: newValue });
  }

  getRepMax() {
    try {
      return parseFloat(Number(repMax(this.state.chosenWeight, this.state.chosenReps)).toFixed(2));
    } catch (e) {
      return "N/A"
    }
  }

  render() {
    return (
      <div>
      <TextField
        hintText="225"
        floatingLabelText="Enter weight"
        onChange={(e, v) => this.onChangeWeight(e, v)}
      />
      
      <TextField
        hintText="5"
        floatingLabelText="Enter reps"
        onChange={(e, v) => this.onChangeReps(e, v)}
      />

      <p>One-Rep Max: <strong>{this.getRepMax()}</strong></p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  RepMaxContainer
);
