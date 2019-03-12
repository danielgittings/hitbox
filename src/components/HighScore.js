import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Score from './Score';

const StyledScoreContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const StyledHeading = styled.h3`
  color: #333;
  display: block;
  border-bottom: 2px solid white;
  padding: 10px 0;
`;

const HighScore = ({ scores }) => {
  const top = scores.sort((x, y) => x.score - y.score).reverse()[0];

  return (
    <StyledScoreContainer>
      <StyledHeading>High Score</StyledHeading>
      <Score type={top.device} score={top.score} time={top.timestamp} />
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
