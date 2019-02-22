import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

export default class Timer extends Component {
  constructor() {
    super();

    this.state = {
      time: 0
    }
  }

  

  render() {
    return (
      <Container >
        <h1>Stopwatch</h1>
        <h1 className="timer">{this.props.timeFormat(this.state.time)}</h1>
      </Container>
    )
  }
}


PropTypes.Timer = {
  timeFormat: PropTypes.func,
}