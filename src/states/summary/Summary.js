import React from 'react';
import PropTypes from 'prop-types';
import GameTitle from '../../components/GameTitle';
import StartButton from '../../components/StartButton';
import FinalScore from '../../components/FinalScore';
import Centraliser from '../../components/Centraliser';
import Scores from '../../components/Scores';
import Footer from '../../components/Footer';

const Summary = ({ scores, startGame, showHighScore }) => (
  <>
    <Centraliser>
      <GameTitle title="Clicktangles" primary={false} />
      <StartButton startGame={startGame} buttonText={'Play again'} />
      {showHighScore && <FinalScore scores={scores} />}

      {scores.length > 1 && (
        <>
          <Scores scores={scores} />
          {/* <HighScore scores={scores} />
          <RecentScores scores={scores} /> */}
        </>
      )}
    </Centraliser>
    <Footer />
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
