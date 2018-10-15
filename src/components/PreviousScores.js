import React from 'react';

const PreviousScores = ({ scores }) => (
  <>
    <h4>Previous scores</h4>
    <ul>
      {scores.slice(0, 5).map((score) => (
        <li key={score.timestamp}>{score.score}</li>
      ))}
    </ul>
  </>
);

export default PreviousScores;
