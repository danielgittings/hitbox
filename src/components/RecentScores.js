import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Score from './Score';

const StyledIcon = styled.span`
  margin-top: -50px;
  background-color: #ede7f7;
  height: 75px;
  width: 75px;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  border: 5px solid white;
`;

const PreviousScores = ({ scores }) => (
  <>
    <StyledIcon>⏲️</StyledIcon>
    <h4>Recent scores</h4>
    {scores
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 5)
      .map(score => (
        <Score key={score.timestamp} type={score.device} score={score.score} />
      ))}
  </>
);

PreviousScores.propTypes = {
  scores: PropTypes.arrayOf(
    PropTypes.shape({
      device: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      timestamp: PropTypes.number.isRequired
    })
  )
};

export default PreviousScores;
