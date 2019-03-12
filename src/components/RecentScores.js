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

const PreviousScores = ({ scores }) => {
  return (
    <StyledScoreContainer>
      <StyledHeading>Recent scores</StyledHeading>
      {scores
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(0, 5)
        .map(score => (
          <Score
            key={score.timestamp}
            type={score.device}
            score={score.score}
            time={score.timestamp}
          />
        ))}
    </StyledScoreContainer>
  );
};

PreviousScores.propTypes = {
  scores: PropTypes.arrayOf(
    PropTypes.shape({
      device: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired
    })
  )
};

export default PreviousScores;
