import React from 'react';
import GameTitle from '../../components/GameTitle';
import StartButton from '../../components/StartButton';
import HighScore from '../../components/HighScore';
import PreviousScores from '../../components/PreviousScores';
import FinalScore from '../../components/FinalScore';

const Summary = ({ previousScores, startGame, points }) => (
  <React.Fragment>
    <GameTitle title="Clicktangles"/>
    <StartButton startGame={startGame} />
    <FinalScore points={points} />
    <HighScore previousScores={previousScores} />
    <PreviousScores previousScores={previousScores} />
  </React.Fragment>
);

export default Summary;