import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Card, CardActions, CardHeader } from "material-ui/Card";
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
              <RaisedButton label="Quick" primary={true} />
            </Link>
          </CardActions>
        </Card>
        <Card>
          <CardHeader
            title="Rep Max Calculator"
            subtitle="Calculate your one-rep max (or n-rep max) for a given weight and rep count."
          />
          <CardActions>
            <Link to={"/rep-max"}>
              <RaisedButton label="1RM" primary={true} />
            </Link>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default CardContainer;
