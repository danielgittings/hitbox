import React from 'react';

const PreviousScores = ({ scores }) => (
  <React.Fragment>
    <h4>Previous scores</h4>
    <ul>
      { scores.reverse().map(score =>
        <li key={score.timestamp}>{score.score}</li>
      )}
    </ul>
  </React.Fragment>
);

export default PreviousScores;
