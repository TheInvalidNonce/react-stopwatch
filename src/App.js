import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import Timer from './components/Timer';
import './App.css';
import Controls from './components/Controls';
import SplitTimeList from './components/SplitTimeList';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      splitList: [],
    }
  }

  timeFormat = milliseconds => {
    let remaining = milliseconds / 1000;

    const hh = parseInt(remaining / 1000);

    remaining %= 3600;

    const mm = parseInt(remaining / 60, 10);
    const ss = parseInt(remaining % 60);
    const ms = parseInt((milliseconds % 1000) / 100);

    return `${hh}:${mm}:${ss}:${ms}`
  }

  render() {
    return (
      <Jumbotron>
        <Container>
          <Row>
            <Col></Col>
            <Col md="auto">
              <Timer timeFormat={this.timeFormat}/>
            </Col>
            <Col></Col>
          </Row>
          <Row>
          <Col></Col>
            <Col md="auto">
              <Controls />
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <SplitTimeList 
          timeFormat={this.timeFormat}
          splitList={this.state.splitList}/>
      </Jumbotron>
    );
  }
}

export default App;
