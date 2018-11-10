import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimerBar from '../../components/TimerBar';
import GameGrid from '../../components/GameGrid';

class GameScreen extends Component {
  state = {
    score: 0,
    timer: null,
    secondsLeft: 10,
    countdown: true
  };

  componentDidMount = () => {
    const timer = setInterval(this.decrementSeconds, 1000);
    this.setState({
      timer
    });
  };

  componentWillUnmount = () => {
    clearInterval(this.state.timer);
  };

  decrementSeconds = () => {
    if (this.state.secondsLeft > 0) {
      this.setState(prevState => ({
        secondsLeft: prevState.secondsLeft - 1
      }));
    } else {
      const size = this.props.width > 600 ? 'desktop' : 'mobile';
      this.props.endGame({
        timestamp: Date.now(),
        score: this.state.score,
        device: size
      });
      this.props.toggleShowHighScore();
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
        <GameGrid width={this.props.width} addPoint={this.addPoint} />
      </>
    );
  }
}

GameScreen.propTypes = {
  endGame: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  toggleShowHighScore: PropTypes.func.isRequired
};

export default GameScreen;
