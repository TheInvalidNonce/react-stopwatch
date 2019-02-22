import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';

export default class Controls extends Component {
  constructor() {
    super();
  }

  render() {
    const { stop, start, reset, addSplit } = this.props
    return (
      <Container className='controls'>
        <Button 
          variant='success'
          onClick={() => start()}
        >Start
        </Button>
        <Button 
          variant='danger'
          onClick={() => stop()}
        >Stop</Button>
        <Button 
          variant='warning'
          onClick={() => reset()}
        >Reset</Button>
        <Button 
          variant='primary'
          onClick={() => addSplit()}
        >Split</Button>
      </Container>
    )
  }
}