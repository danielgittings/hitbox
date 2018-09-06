import React from 'react';

const PreviousScores = ({ previousScores }) => (
  <React.Fragment>
    <h4>Previous scores</h4>
    <ul>
      { previousScores.reverse().map(score =>
        <li key={score.timestamp}>{score.score}</li>
      )}
    </ul>
  </React.Fragment>
);

export default PreviousScores;
