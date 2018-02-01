import React, { Component } from "react";

import { connect } from "react-redux";
import { setChosenWeight } from "Containers/CalculatorContainer/actions";

import WeightPickerComponent from "Components/WeightPickerComponent";
import PlatePoolComponent from "Components/PlatePoolComponent";

const mapStateToProps = state => {
  return {
    chosenWeight: state.chosenWeight,
    availablePlates: state.availablePlates
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setChosenWeight: chosenWeight => dispatch(setChosenWeight(chosenWeight))
  };
};

const excludeBar = weight => {
  return weight - 45;
};

const excludeHalf = weight => {
  return weight / 2;
};

class CalculatorContainer extends Component {
  render() {
    return (
      <div>
        <WeightPickerComponent onChange={this.props.setChosenWeight} />

        <PlatePoolComponent
          weight={Math.max(excludeHalf(excludeBar(this.props.chosenWeight)), 0)}
          availablePlates={this.props.availablePlates}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  CalculatorContainer
);
