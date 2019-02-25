import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

export default class SplitTimeItem extends Component {

  handleClick = e => {
    e.target.classList.add("active");
  };

  render() {
    const { lap, time, resetSplit } = this.props;

    return (
      <ListGroup.Item
        className='split'
        onClick={e => {
          resetSplit(e);
          this.handleClick(e);
        }}
      >
        {lap}: {time}ms
      </ListGroup.Item>
    );
  }
}
