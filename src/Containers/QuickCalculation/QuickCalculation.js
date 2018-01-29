import React, { Component } from "react";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class QuickCalculation extends Component {
  render() {
    return (
      <div>
        <TextField
          hintText="225"
          floatingLabelText="Enter weight"
        />

       <RaisedButton label="Calculate" primary={true} />
      </div>
    );
  }
}

export default QuickCalculation;
