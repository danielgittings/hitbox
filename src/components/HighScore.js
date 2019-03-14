import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Score from './Score';

const StyledScoreContainer = styled.div`
  margin: 0;
  padding: 30px 30px 20px;
  background-color: #0b639a;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeading = styled.h3`
  color: white;
  display: block;
  margin: 0;
`;

const StyledTrophy = styled.span`
  font-size: 7rem;
  color: white;
`;

const HighScore = ({ scores }) => {
  const top = scores.sort((x, y) => x.score - y.score).reverse()[0];

  return (
    <StyledScoreContainer>
      <StyledHeading>High Score</StyledHeading>
      <StyledTrophy role="img" aria-label="Trophy">
        {top.score}
      </StyledTrophy>
      {/* <Score type={top.device} score={top.score} time={top.timestamp} /> */}
    </StyledScoreContainer>
  );
};

HighScore.propTypes = {
  scores: PropTypes.arrayOf(
    PropTypes.shape({
      device: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired
    })
  )
};

export default HighScore;
