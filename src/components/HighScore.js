import React from 'react';
import PropTypes from 'prop-types';

const HighScore = ({ scores }) => {
  const top = scores.sort((x, y) => x.score - y.score).reverse()[0];

  return (
    <>
      <h4>High score</h4>
      <p>
        {top.score} on {top.device}
      </p>
    </>
  );
};

HighScore.propTypes = {
  scores: PropTypes.arrayOf(
    PropTypes.shape({
      device: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      timestamp: PropTypes.number.isRequired
    })
  )
};

export default HighScore;
