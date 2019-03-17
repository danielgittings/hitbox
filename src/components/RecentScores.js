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
  padding: 30px;
`;

const StyledHeading = styled.h3`
  color: ${props => props.theme.mineShaft};
  display: block;
  margin: 0 0 15px;
  font-size: 1.5rem;
`;

const RecentScores = ({ scores }) => {
  return (
    <StyledScoreContainer>
      <StyledHeading>Latest scores</StyledHeading>
      <div>
        {scores
          .sort((a, b) => b.timestamp - a.timestamp)
          .slice(0, 5)
          .map(score => (
            <Score
              key={score.timestamp}
              score={score.score}
              time={score.timestamp}
            />
          ))}
      </div>
    </StyledScoreContainer>
  );
};

RecentScores.propTypes = {
  scores: PropTypes.arrayOf(
    PropTypes.shape({
      score: PropTypes.number.isRequired,
      timestamp: PropTypes.number.isRequired
    })
  )
};

export default RecentScores;
