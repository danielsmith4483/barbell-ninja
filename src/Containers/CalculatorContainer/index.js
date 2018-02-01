import React, { Component } from "react";

import { connect } from "react-redux";
import { setChosenWeight } from "Containers/CalculatorContainer/actions";

import WeightPickerComponent from "Components/WeightPickerComponent";
import PlateCombinationComponent from "Components/PlateCombinationComponent";

const mapStateToProps = state => {
  return {
    chosenWeight: state.chosenWeight
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setChosenWeight: chosenWeight => dispatch(setChosenWeight(chosenWeight))
  };
};

class CalculatorContainer extends Component {
  render() {
    return (
      <div>
        <WeightPickerComponent onChange={this.props.setChosenWeight} />

        <PlateCombinationComponent weight={this.props.chosenWeight} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  CalculatorContainer
);
