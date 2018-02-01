import React, { Component } from "react";
import Chip from "material-ui/Chip";

const styles = {
  chip: {
    margin: 4
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap"
  }
};

const newPlates = (oldPlates, plateToRemove) => {
  const index = oldPlates.map(p => p.weight).indexOf(plateToRemove);
  const newCount = Math.max(oldPlates[index].count - 2, 0);

  const plate = oldPlates[index];

  return Object.assign([], oldPlates, {
    [index]: { ...plate, count: newCount }
  });
};

const maxUsablePlate = (availablePlates = [], weight) => {
  const candidates = availablePlates
    .filter(p => p.count > 0)
    .filter(q => q.weight <= weight);

  if (candidates && candidates.length) {
    return Math.max(Math.max.apply(Math, candidates.map(o => o.weight)), 0);
  }
  return 0;
};

class PlatePoolComponent extends Component {
  render() {
    const plateToUse = maxUsablePlate(
      this.props.availablePlates,
      this.props.weight
    );

    if (plateToUse <= 0) {
      return <div />;
    } else {
    }

    if (this.props.weight > 0) {
      return (
        <div style={styles.wrapper}>
          <Chip style={styles.chip}>{plateToUse}</Chip>

          <PlatePoolComponent
            weight={this.props.weight - plateToUse}
            availablePlates={newPlates(this.props.availablePlates, plateToUse)}
          />
        </div>
      );
    }
    return <div />;
  }
}

export default PlatePoolComponent;
