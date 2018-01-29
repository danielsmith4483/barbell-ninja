import React, { Component } from "react";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class WeightPickerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {weight: 0};

    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(event, newValue) {
    this.setState({weight: newValue});
  }

  render() {
    return (
      <div>
        <TextField
          hintText="225"
          floatingLabelText="Enter weight"
          onChange={(e, v) => this.onChangeText(e, v)}
        />

        <RaisedButton
          label="Calculate" 
          primary={true} 
          onClick={() => this.props.onChange(this.state.weight)}
        />
      </div>
    );
  }
}

export default WeightPickerComponent;
