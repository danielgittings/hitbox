import React from 'react';

const FinalScore = ({ scores }) => {
  const mostRecent = scores.sort((a, b) => b.timestamp - a.timestamp)[0];

  return (
    <React.Fragment>
      <h2>Final score: {mostRecent.score}</h2>
    </React.Fragment>
  )
};

export default FinalScore;
