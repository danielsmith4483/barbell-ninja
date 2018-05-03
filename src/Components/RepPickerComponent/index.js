import React, { Component } from "react";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class RepPickerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { chosenReps: 0 };

    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(event, newValue) {
    this.setState({ chosenReps: newValue });
  }

  render() {
    return (
      <div>
        <TextField
          hintText="5"
          floatingLabelText="Enter reps"
          onChange={(e, v) => this.onChangeText(e, v)}
        />

        <RaisedButton
          label="Set Reps"
          primary={true}
          onClick={() => this.props.onChange(this.state.chosenReps)}
        />
      </div>
    );
  }
}

export default RepPickerComponent;
