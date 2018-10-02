import React, { Component, Fragment } from 'react';
import Title from './states/title/Title';
import Summary from './states/summary/Summary';
import GameScreen from './states/GameScreen/GameScreen';

class App extends Component {
  state = {
    playing: false,
    played: false,
    scores: [],
  };

  componentDidMount = () => {
    // Get scores from localstorage and set into previous
    const scores = JSON.parse(localStorage.getItem('previousScores'));

    if (scores) {
      this.setState({
        scores,
        played: true,
      });
    }
  };

  addNewScore = (score) => {
    this.setState((prevState) => ({
      scores: [...prevState.scores, score],
    }));
  };

  startGame = () => {
    this.setState({
      playing: true,
    });
  };

  endGame = (score) => {
    this.setState(
      (prevState) => ({
        playing: false,
        scores: [...prevState.scores, score],
      }),
      this.saveScore,
    );

    this.markAsPlayed();
  };

  saveScore = () => {
    localStorage.setItem('previousScores', JSON.stringify(this.state.scores));
  };

  markAsPlayed = () => {
    this.setState({
      played: true,
    });
  };

  render() {
    const { scores, playing, played } = this.state;

    return (
      <div style={{ height: '100%' }}>
        {!playing &&
          !played && (
            <Fragment>
              <Title startGame={this.startGame} />
            </Fragment>
          )}

        {!playing &&
          played && (
            <Fragment>
              <Summary scores={scores} startGame={this.startGame} />
            </Fragment>
          )}

        {playing && (
          <Fragment>
            <GameScreen
              markAsPlayed={this.markAsPlayed}
              addNewScore={this.addNewScore}
              endGame={this.endGame}
            />
          </Fragment>
        )}
      </div>
    );
  }
}

export default App;
