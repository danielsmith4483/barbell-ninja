import React, { Component } from "react";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class WeightPickerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { chosenWeight: 0 };

    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(event, newValue) {
    this.setState({ chosenWeight: newValue });
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
          onClick={() => this.props.onChange(this.state.chosenWeight)}
        />
      </div>
    );
  }
}

export default WeightPickerComponent;
