import React, { PureComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import Container from './components/Container';
import Title from './screens/title/Title';
import Summary from './screens/summary/Summary';
import GameScreen from './screens/GameScreen/GameScreen';
import Countdown from './screens/countdown/Countdown';

import { theme } from './utils/theme';

const StyledApp = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  color: ${props => props.theme.primaryText};
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(14, 131, 205, 1) 0%,
    rgba(13, 99, 153, 1) 100%
  );
`;

class App extends PureComponent {
  state = {
    playing: false,
    played: false,
    countingDown: false,
    scores: [],
    showFinalScore: false
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

  toggleShowFinalScore = () => {
    this.setState({
      showFinalScore: true
    });
  };

  render() {
    const {
      scores,
      playing,
      played,
      countingDown,
      showFinalScore
    } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <StyledApp>
          <Container>
            {!playing && !played && <Title startGame={this.startGame} />}

            {!playing && played && (
              <Summary
                showFinalScore={showFinalScore}
                scores={scores}
                startGame={this.startGame}
              />
            )}

            {playing && countingDown && (
              <Countdown endCountdown={this.endCountdown} />
            )}

            {playing && !countingDown && (
              <GameScreen
                toggleShowFinalScore={this.toggleShowFinalScore}
                markAsPlayed={this.markAsPlayed}
                addNewScore={this.addNewScore}
                endGame={this.endGame}
              />
            )}
          </Container>
        </StyledApp>
      </ThemeProvider>
    );
  }
}

export default App;
