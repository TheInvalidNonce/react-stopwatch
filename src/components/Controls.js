import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';

export default class Controls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { stop, start, reset, addSplit, isRunning } = this.props
    
    return (
      <Container className='controls'>
        <Button 
          variant='success'
          onClick={start}
          disabled={!isRunning ? false : true}
        >Start
        </Button>
        <Button 
          variant='danger'
          onClick={stop}
          disabled={isRunning ? false : true}
        >Stop</Button>
        <Button 
          variant='warning'
          onClick={reset}
        >Reset</Button>
        <Button 
          variant='primary'
          onClick={addSplit}
        >Split</Button>
      </Container>
    )
  }
}