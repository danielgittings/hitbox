import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GameTitle from '../../components/GameTitle';
import Button from '../../components/Button';
import FinalScore from '../../components/FinalScore';
import Centraliser from '../../components/Centraliser';
import Scores from '../../components/Scores';
import NewHighScore from '../../components/NewHighScore';

import media from '../../utils/breakpoints';

import {
  StyledWhiteWrapper,
  StyledFlexColumnCenter,
  StyledPadding30Col
} from '../../components/StyledComponents';

const SubHeading = styled.h3`
  font-size: 1.5rem;
  margin: 10px 0 0;
  color: ${props => props.theme.gray};
  font-weight: 500;
  text-align: center;

  ${media.mdPhone`
    font-size: 2rem;
  `};
`;

const StyledHeadingWrapper = styled(StyledPadding30Col)`
  padding: 30px 10px;

  ${media.bigPhone`
    padding: 30px;
  `}
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
                  <StyledHeadingWrapper>
                    <GameTitle title="CLICKTANGLES" primary={false} />
                    <SubHeading>Click the blue one.</SubHeading>
                  </StyledHeadingWrapper>
                )}
                {showFinalScore && <FinalScore scores={scores} />}
                {showFinalScore && isHighest && <NewHighScore />}
              </div>

              <StyledPadding30Col>
                <Button
                  func={startGame}
                  primary
                  buttonText={showFinalScore ? 'Play again' : 'Play'}
                />
                {!recents && scores.length > 1 && (
                  <Button
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
      score: PropTypes.number.isRequired,
      timestamp: PropTypes.number.isRequired
    })
  ).isRequired,
  startGame: PropTypes.func.isRequired,
  showFinalScore: PropTypes.bool.isRequired
};

export default React.memo(Summary);
