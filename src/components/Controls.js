import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';

export default class Controls extends Component {
  constructor() {
    super();

    this.state = {
      isRunning: false
    }
  }

  render() {
    return (
      <Container className='controls'>
        <Button variant='success'>Start</Button>
        <Button variant='danger'>Stop</Button>
        <Button variant='warning'>Reset</Button>
        <Button variant='primary'>Split</Button>
      </Container>
    )
  }
}