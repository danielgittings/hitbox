import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimerBar from '../../components/TimerBar';
import GameGrid from '../../components/GameGrid';

class GameScreen extends Component {
  state = {
    score: 0,
    timer: null,
    secondsLeft: 30400,
    countdown: true
  };

  componentDidMount = () => {
    const timer = setInterval(this.decrementSeconds, 100);
    this.setState({
      timer
    });
  };

  componentWillUnmount = () => {
    clearInterval(this.state.timer);
  };

  decrementSeconds = () => {
    if (this.state.secondsLeft > 500) {
      this.setState(prevState => ({
        secondsLeft: prevState.secondsLeft - 100
      }));
    } else {
      this.props.endGame({
        timestamp: Date.now(),
        score: this.state.score
      });
      this.props.toggleShowFinalScore();
    }
  };

  addPoint = () => {
    this.setState(
      prevState => ({
        score: prevState.score + 1
      }),
      this.newCell
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

GameScreen.propTypes = {
  endGame: PropTypes.func.isRequired,
  toggleShowFinalScore: PropTypes.func.isRequired
};

export default GameScreen;
