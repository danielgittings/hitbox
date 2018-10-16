import React, { Component } from 'react';
import TimerBar from '../../components/TimerBar';
import GameGrid from '../../components/GameGrid';
import Countdown from '../../components/Countdown';

class GameScreen extends Component {
  state = {
    score: 0,
    timer: null,
    secondsLeft: 10,
    countdown: true,
  };

  componentDidMount = () => {
    const timer = setInterval(this.decrementSeconds, 1000);
    this.setState({
      timer,
    });
  };

  componentWillUnmount = () => {
    clearInterval(this.state.timer);
  };

  decrementSeconds = () => {
    if (this.state.secondsLeft > 0) {
      this.setState(prevState => ({
        secondsLeft: prevState.secondsLeft - 1,
      }));
    } else {
      this.props.endGame({ timestamp: Date.now(), score: this.state.score });
    }
  };

  addPoint = () => {
    this.setState(
      prevState => ({
        score: prevState.score + 1,
      }),
      this.newCell,
    );
  };

  render() {
    return (
      <>
        <TimerBar secondsLeft={this.state.secondsLeft} />
        <GameGrid addPoint={this.addPoint} />
      </>
    );
  }
}

export default GameScreen;
