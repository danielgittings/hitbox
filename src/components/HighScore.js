import React from 'react';

const HighScore = ({ previousScores }) => (
  <React.Fragment>
    <h4>High score</h4>
    <p>{ Math.max.apply(Math, previousScores.map(item => item.score))}</p>
  </React.Fragment>
);

export default HighScore;
