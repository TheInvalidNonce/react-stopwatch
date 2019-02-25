import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import SplitTimeItem from './SplitTimeItem';

export default class SplitTimeList extends Component {
  constructor() {
    super();
  }

  renderSplitTimeItems() {
    const { splitList } = this.props;

    return splitList.map( (time, index) => {
      return (
        <ListGroup>
          <SplitTimeItem 
            key={index}
            lap={index + 1} 
            time={time}
          />
        </ListGroup>
      )
    })
  }

  render() {
    return (
      <Container className='splitTimeList'>
        {this.renderSplitTimeItems()}
      </Container>
    )
  }
}

SplitTimeList.defaultProps = {
  lap: 0,
  time: 0
}