import React, { Component } from "react";

class PlateCombinationComponent extends Component {
  constructor(props) {
  getPlates() {
    let weight = this.props.weight;
    const output = [];

    // subtract barbell
    weight -= this.state.barbell;

    // isolate 1 side of barbell
    weight /= 2;

    const availablePlates = [...Object.keys(this.state.plates)].map(p => Number(p));

    while (availablePlates && availablePlates.length) {
      const largestPlateIndex = availablePlates.indexOf(Math.max(...availablePlates));
      const plateWeight = availablePlates[largestPlateIndex];

      if (weight - plateWeight >= 0) {
        output.push(plateWeight);
        weight -= plateWeight;
      } else {
        availablePlates.splice(largestPlateIndex, 1);
      }
    }

    return output.toString();
  }

  render() {
    return (
      <div>
        {this.getPlates()}
      </div>
    );
  }
}

export default PlateCombinationComponent;
