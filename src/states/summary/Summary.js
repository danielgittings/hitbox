import React from 'react';
import PropTypes from 'prop-types';
import GameTitle from '../../components/GameTitle';
import StartButton from '../../components/StartButton';
import HighScore from '../../components/HighScore';
import RecentScores from '../../components/RecentScores';
import FinalScore from '../../components/FinalScore';
import Centraliser from '../../components/Centraliser';

const Summary = ({ scores, startGame, showHighScore }) => (
  <>
    <Centraliser>
      <GameTitle title="Clicktangles" />
      <StartButton startGame={startGame} buttonText={'Play again'} />
      {showHighScore && <FinalScore scores={scores} />}

      {scores.length > 1 && (
        <>
          <HighScore scores={scores} />
          <RecentScores scores={scores} />
        </>
      )}
    </Centraliser>
  </>
);

Summary.propTypes = {
  scores: PropTypes.arrayOf(
    PropTypes.shape({
      device: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      timestamp: PropTypes.number.isRequired
    })
  ).isRequired,
  startGame: PropTypes.func.isRequired
};

export default Summary;
