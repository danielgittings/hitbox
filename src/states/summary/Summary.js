import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GameTitle from '../../components/GameTitle';
import StartButton from '../../components/StartButton';
import FinalScore from '../../components/FinalScore';
import Centraliser from '../../components/Centraliser';
import Scores from '../../components/Scores';
import NewHighScore from '../../components/NewHighScore';

import {
  StyledWhiteWrapper,
  StyledFlexColumnCenter,
  StyledPadding30Col
} from '../../components/StyledComponents';

const StyledRecentButton = styled.button`
  background-color: yellowgreen;
  padding: 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

class Summary extends Component {
  state = {
    isHighest: false,
    score: true,
    recents: false
  };

  componentDidMount() {
    const { scores } = this.props;

    if (scores.length === 1) {
      this.setState({
        isHighest: true
      });
    } else {
      const mostRecent = scores.sort((a, b) => b.timestamp - a.timestamp)[0];

      const previousHighest = scores
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(1, scores.length)
        .sort((x, y) => x.score - y.score)
        .reverse()[0];

      if (mostRecent.score > previousHighest.score) {
        this.setState({
          isHighest: true
        });
      }
    }
  }

  showRecents = () => {
    this.setState({
      score: false,
      recents: true
    });
  };

  showScore = () => {
    this.setState({
      score: true,
      recents: false
    });
  };

  render() {
    const { scores, showFinalScore, startGame } = this.props;
    const { isHighest, recents, score } = this.state;

    return (
      <Centraliser>
        <StyledWhiteWrapper>
          {score && (
            <StyledFlexColumnCenter>
              <div>
                {!showFinalScore && (
                  <StyledPadding30Col>
                    <GameTitle title="CLICKTANGLES" primary={false} />
                  </StyledPadding30Col>
                )}
                {showFinalScore && <FinalScore scores={scores} />}
                {showFinalScore && isHighest && <NewHighScore />}
              </div>

              <StyledPadding30Col>
                <StartButton
                  func={startGame}
                  buttonText={showFinalScore ? 'Play again' : 'Play'}
                />
                {!recents && scores.length > 1 && (
                  <StartButton
                    buttonText="Show recent"
                    secondary
                    func={this.showRecents}
                  />
                )}
              </StyledPadding30Col>
            </StyledFlexColumnCenter>
          )}

          {recents && scores.length > 1 && (
            <Scores goBack={this.showScore} scores={scores} />
          )}
        </StyledWhiteWrapper>
      </Centraliser>
    );
  }
}

Summary.propTypes = {
  scores: PropTypes.arrayOf(
    PropTypes.shape({
      device: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired
    })
  ).isRequired,
  startGame: PropTypes.func.isRequired
};

export default React.memo(Summary);
