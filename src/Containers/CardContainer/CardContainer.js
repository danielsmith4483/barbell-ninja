import React, { Component } from "react";
import "./CardContainer.css";

import { Link } from "react-router-dom";

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
            <Link to={"/quick"}>
              <RaisedButton label="Calculate Now" primary={true} />
            </Link>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default CardContainer;
