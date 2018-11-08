import React from 'react';

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

export default HighScore;
