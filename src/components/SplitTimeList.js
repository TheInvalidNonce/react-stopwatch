import React, { Component } from "react";
import { Container, ListGroup } from "react-bootstrap";
import SplitTimeItem from "./SplitTimeItem";

export default class SplitTimeList extends Component {

  renderSplitTimeItems() {
    const { splitList, resetSplit } = this.props;

    return (
      <ListGroup>
        {splitList.map((time, index) => {
          return (
            <SplitTimeItem
              key={index}
              lap={index + 1}
              time={time}
              resetSplit={resetSplit}
            />
          );
        })}
      </ListGroup>
    );
  }

  render() {
    return (
      <Container className="splitTimeList">
        {this.renderSplitTimeItems()}
      </Container>
    );
  }
}

SplitTimeList.defaultProps = {
  lap: 0,
  time: 0
};
