import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import Timer from "./components/Timer";
import "./App.css";
import Controls from "./components/Controls";
import SplitTimeList from "./components/SplitTimeList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      time: 0,
      splitList: [],
      isRunning: false,
      updateInterval: 10,
      currentSplit: null
    };
  }

  padZero = number => {
    let strNum = String(number);
    if (strNum.length < 2) {
      strNum = strNum.padStart(2, "0");
      return strNum;
    } else {
      return strNum;
    }
  };

  timeFormat = milliseconds => {
    const { padZero } = this;
    let remaining = milliseconds / 1000;

    const hh = parseInt(remaining / 1000);

    remaining %= 3600;

    const mm = parseInt(remaining / 60, 10).toString(4);
    const ss = parseInt(remaining % 60);
    const ms = parseInt((milliseconds % 1000) / 10, 10);

    return `${padZero(hh)}:${padZero(mm)}:${padZero(ss)}:${padZero(ms)}`;
  };

  start = () => {
    const { updateInterval } = this.state;
    this.setState(
      { isRunning: true},
      () => {
        this.timer = setInterval(
          () => this.updateTimer(updateInterval),
          updateInterval
        );
      }
    );
  };

  stop = () => {
    this.setState(
      { isRunning: false },
      () => {
        clearInterval(this.timer);
      }
    );
  };

  reset = () => {
    this.setState({
      time: 0,
      splitList: [],
      isRunning: false
    });
  };

  addSplit = () => {
    const { time, splitList } = this.state;

    this.setState({
      splitList: [...splitList, time]
    });
  };

  updateTimer = addTime => {
    const { time } = this.state;
    this.setState({
      time: time + addTime
    });
  };

  resetSplit = e => {
    e.currentTarget.className = "list-group-item active";
    let activeArr = [...document.getElementsByClassName("list-group-item")];
    activeArr = activeArr.map(el => (el.className = "list-group-item"));
    this.setState(
      {
        currentSplit: e.currentTarget.innerText
      },
      () => {
        let newList = this.state.splitList;
        let clickedSplitIndex = +this.state.currentSplit.split(":")[0].trim();
        let clickedSplitTime = +this.state.currentSplit
          .split(":")[1]
          .trim()
          .slice(0, -2);
        newList = newList.slice(0, clickedSplitIndex);

        this.setState({
          splitList: newList,
          time: clickedSplitTime
        });
      }
    );
  };

  render() {
    const { time, splitList, isRunning, } = this.state;
    return (
      <Jumbotron>
        <Container>
          <Row>
            <Col />
            <Col md="auto">
              <Timer 
                time={time} 
                timeFormat={this.timeFormat}
              />
            </Col>
            <Col />
          </Row>
          <Row>
            <Col />
            <Col md="auto">
              <Controls
                start={this.start}
                stop={this.stop}
                reset={this.reset}
                addSplit={this.addSplit}
                isRunning={isRunning}
              />
            </Col>
            <Col />
          </Row>
        </Container>
        <SplitTimeList
          timeFormat={this.timeFormat}
          splitList={splitList}
          time={time}
          resetSplit={this.resetSplit}
        />
      </Jumbotron>
    );
  }
}

export default App;
