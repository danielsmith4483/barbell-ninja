import React, { Component } from "react";
import "./CardContainer.css";

import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";

class CardContainer extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader
            title="Quick Calculation"
            subtitle="Instantly pick a weight and see what plates you need."
          />
          <CardActions>
            <RaisedButton label="Calculate Now" />
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default CardContainer;
