import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  font-family: 300;
`;

const FinalScore = ({ scores }) => {
  const mostRecent = scores.sort((a, b) => b.timestamp - a.timestamp)[0];

  return (
    <>
      <StyledH2>Final score: {mostRecent.score}</StyledH2>
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
