import React from 'react';

const HighScore = ({ scores }) => (
  <React.Fragment>
    <h4>High score</h4>
    <p>{Math.max.apply(Math, scores.map((item) => item.score))}</p>
  </React.Fragment>
);

export default HighScore;
