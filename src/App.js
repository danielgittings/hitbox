import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import Container from './components/Container';
import Title from './states/title/Title';
import Summary from './states/summary/Summary';
import GameScreen from './states/GameScreen/GameScreen';
import Countdown from './states/countdown/Countdown';
import ScreenWidth from './components/ScreenWidth';
import success from './audio/success.mp3';

import { theme } from './utils/theme';

class App extends Component {
  state = {
    playing: false,
    played: false,
    countingDown: false,
    scores: [],
    success: new Audio(success),
    showHighScore: false
  };

  componentDidMount = () => {
    // Get scores from localstorage and set into previous
    const scores = JSON.parse(localStorage.getItem('previousScores'));

    if (scores) {
      this.setState({
        scores,
        played: true
      });
    }
  };

  addNewScore = score => {
    this.setState(prevState => ({
      scores: [...prevState.scores, score]
    }));
  };

  startGame = () => {
    this.setState({
      countingDown: true,
      playing: true
    });
  };

  endCountdown = () => {
    this.setState({
      countingDown: false
    });
  };

  endGame = score => {
    const { success, scores } = this.state;

    if (scores.length === 0) {
      success.play();
    } else if (
      score.score > Math.max.apply(Math, scores.map(item => item.score))
    ) {
      success.play();
    }

    this.setState(
      prevState => ({
        playing: false,
        scores: [...prevState.scores, score]
      }),
      this.saveScore
    );

    this.markAsPlayed();
  };

  saveScore = () => {
    localStorage.setItem('previousScores', JSON.stringify(this.state.scores));
  };

  markAsPlayed = () => {
    this.setState({
      played: true
    });
  };

  toggleShowHighScore = () => {
    this.setState({
      showHighScore: true
    });
  };

  render() {
    const { scores, playing, played, countingDown, showHighScore } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <div
          style={{
            height: '100%',
            backgroundImage: 'linear-gradient(120deg, #ebedee 0%, #ebedee 100%)'
          }}
        >
          <Container>
            {!playing && !played && (
              <>
                <Title startGame={this.startGame} />
              </>
            )}

            {!playing && played && (
              <>
                <Summary
                  showHighScore={showHighScore}
                  scores={scores}
                  startGame={this.startGame}
                />
              </>
            )}

            {playing && countingDown && (
              <Countdown endCountdown={this.endCountdown} />
            )}

            {playing && !countingDown && (
              <>
                <ScreenWidth>
                  {width => (
                    <GameScreen
                      width={width}
                      toggleShowHighScore={this.toggleShowHighScore}
                      markAsPlayed={this.markAsPlayed}
                      addNewScore={this.addNewScore}
                      endGame={this.endGame}
                    />
                  )}
                </ScreenWidth>
              </>
            )}
          </Container>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
