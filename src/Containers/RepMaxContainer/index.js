import React, { Component } from "react";

import { connect } from "react-redux";
import { setChosenWeight, setChosenReps } from "Containers/RepMaxContainer/actions";

import WeightPickerComponent from "Components/WeightPickerComponent";
import RepPickerComponent from "Components/RepPickerComponent";

const mapStateToProps = state => {
  return {
    chosenWeight: state.chosenWeight,
    chosenReps: state.chosenReps
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setChosenWeight: chosenWeight => dispatch(setChosenWeight(chosenWeight)),
    setChosenReps: chosenReps => dispatch(setChosenReps(chosenReps))
  };
};

class RepMaxContainer extends Component {
  render() {
    return (
      <div>
        <WeightPickerComponent onChange={this.props.setChosenWeight} />
        <RepPickerComponent onChange={this.props.setChosenReps} />

        {this.props.chosenWeight + this.props.chosenReps}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  RepMaxContainer
);
