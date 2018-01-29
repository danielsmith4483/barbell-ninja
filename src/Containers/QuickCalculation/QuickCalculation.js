import React, { Component } from "react";

import WeightPickerComponent from "../../Components/WeightPickerComponent";

class QuickCalculation extends Component {
  constructor(props) {
    super(props);

    this.state = {weight: 0};

    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    if (this.state.weight !== value) {
     this.setState({weight: value});
    }
  }

  render() {
    return (
      <div>
        <WeightPickerComponent onChange={this.onChange} />
        {this.state.weight}
      </div>
    );
  }
}

export default QuickCalculation;
