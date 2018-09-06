import React from 'react';
import TimerBar from '../../components/TimerBar';
import GameGrid from '../../components/GameGrid';

const Playing = ({ secondsLeft, cells, clicked }) => (
  <React.Fragment>
    <TimerBar secondsLeft={secondsLeft} />
    <GameGrid cells={cells} clicked={clicked} />
  </React.Fragment>
);

export default Playing;
