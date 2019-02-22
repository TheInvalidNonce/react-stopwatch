import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

export default class Timer extends Component {
  constructor() {
    super();
  }

  

  render() {
    const { time, timeFormat } = this.props;
    
    return (
      <Container >
        <h1 className='title'>React Stopwatch</h1>
        <h1 className="timer">{timeFormat(time)}</h1>
      </Container>
    )
  }
}


PropTypes.Timer = {
  timeFormat: PropTypes.func,
}