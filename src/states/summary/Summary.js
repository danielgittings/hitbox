import React from 'react';
import GameTitle from '../../components/GameTitle';
import StartButton from '../../components/StartButton';
import HighScore from '../../components/HighScore';
import PreviousScores from '../../components/PreviousScores';
import FinalScore from '../../components/FinalScore';
import Centraliser from '../../components/Centraliser';

const Summary = ({ previousScores, startGame, points }) => (
  <React.Fragment>
    <Centraliser>
      <GameTitle title="Clicktangles"/>
      <StartButton startGame={startGame} />
      <FinalScore points={points} />
      <HighScore previousScores={previousScores} />
      <PreviousScores previousScores={previousScores} />
    </Centraliser>
  </React.Fragment>
);

export default Summary;