import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap'

export default class SplitTimeItem extends Component {
  constructor() {
    super();
  }

  render() {

    const { lap, time } = this.props;
    return(
      <ListGroupItem>
        {lap} : { time }
      </ListGroupItem>
    )
  }
}