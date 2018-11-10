import React from 'react';
import PropTypes from 'prop-types';

const PreviousScores = ({ scores }) => (
  <>
    <h4>Recent scores</h4>
    <ul>
      {scores
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(0, 5)
        .map(score => (
          <li key={score.timestamp}>
            {score.score} on {score.device}
          </li>
        ))}
    </ul>
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
