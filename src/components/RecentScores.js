import React from 'react';

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

export default PreviousScores;
