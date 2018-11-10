import React from 'react';
import PropTypes from 'prop-types';

const FinalScore = ({ scores }) => {
  const mostRecent = scores.sort((a, b) => b.timestamp - a.timestamp)[0];

  return (
    <>
      <h2>Final score: {mostRecent.score}</h2>
    </>
  );
};

FinalScore.propTypes = {
  scores: PropTypes.arrayOf(
    PropTypes.shape({
      device: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      timestamp: PropTypes.number.isRequired
    })
  )
};

export default FinalScore;
