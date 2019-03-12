import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Score from './Score';

const StyledScoreContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeading = styled.h3`
  color: #333;
  display: block;
  border-bottom: 2px solid white;
  margin: 20px 0 10px;
`;

const PreviousScores = ({ scores }) => {
  return (
    <StyledScoreContainer>
      <StyledHeading>Recent scores</StyledHeading>
      <div>
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
      </div>
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
