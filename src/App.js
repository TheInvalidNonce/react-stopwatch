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
      time: 0,
      splitList: [],
      isRunning: false,
      updateInterval: 10
    }

  }

  padZero = number => {
    let strNum = String(number)
    if (strNum.length < 2) {
      strNum = strNum.padStart(2, '0')
      return strNum;
    }
    else {
      return strNum;
    }
  }

  timeFormat = milliseconds => {
    const { padZero } = this;
    let remaining = milliseconds / 1000;

    const hh = parseInt(remaining / 1000);

    remaining %= 3600;

    const mm = parseInt(remaining / 60, 10).toString(4);
    const ss = parseInt(remaining % 60);
    const ms = parseInt((milliseconds % 1000) / 10, 10);

    return `${padZero(hh)}:${padZero(mm)}:${padZero(ss)}:${padZero(ms)}`
  }

  start = () => {
    const { updateInterval } = this.state;
    this.setState({
      isRunning: true
    }, () => {
      this.timer = setInterval(() => this.updateTimer(updateInterval), updateInterval)
    })
  }

  stop = () => {
    this.setState({
      isRunning: false
    }, () => {
      clearInterval(this.timer)
    })
  }

  reset = () => {  
    this.setState({
      time: 0,
      splitList:[],
      isRunning: false
    })
  }

  addSplit = () => {
    const { time, splitList } = this.state;

    this.setState({
      splitList: [...splitList, time]
    })
  }

  updateTimer = addTime => {
    const { time } = this.state;
    this.setState({
      time: time + addTime
    })

  }

  render() {

    const { time, splitList, isRunning } = this.state
    return (
      <Jumbotron>
        <Container>
          <Row>
            <Col></Col>
            <Col md="auto">
              <Timer
                time={time} 
                timeFormat={this.timeFormat}
              />
            </Col>
            <Col></Col>
          </Row>
          <Row>
          <Col></Col>
            <Col md="auto">
              <Controls 
                start={this.start}
                stop={this.stop}
                reset={this.reset}
                addSplit={this.addSplit}
                isRunning={isRunning}
              />
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <SplitTimeList 
          timeFormat={this.timeFormat}
          splitList={splitList}/>
      </Jumbotron>
    );
  }
}

export default App;
