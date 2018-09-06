import React from 'react';
import GameTitle from '../../components/GameTitle';
import StartButton from '../../components/StartButton';

const Title = ({ startGame }) => (
  <React.Fragment>
    <GameTitle title="Clicktangles"/>
    <StartButton startGame={startGame} />
  </React.Fragment>
);

export default Title;