import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import SplitTimeItem from './SplitTimeItem';

export default class SplitTimeList extends Component {
  constructor() {
    super();
  }

  renderSplitTimeItems() {
    let lap = 0;
    let time = 0;

    return (
      <ListGroup>
        <SplitTimeItem lap={lap} time={time}/>
      </ListGroup>
    )
  }

  render() {
    return (
      <Container className='splitTimeList'>
        {this.renderSplitTimeItems()}
      </Container>
    )
  }
}