import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OneHundredVh from '../../components/OneHundredVh';
import GameTitle from '../../components/GameTitle';
import StartButton from '../../components/StartButton';
import FinalScore from '../../components/FinalScore';
import Centraliser from '../../components/Centraliser';
import Scores from '../../components/Scores';
import Footer from '../../components/Footer';

class Summary extends Component {
  state = {
    isHighest: false
  };

  componentDidMount() {
    const { scores } = this.props;

    if (scores.length === 1) {
      this.setState({
        isHighest: true
      });
    } else {
      const mostRecent = scores.sort((a, b) => b.timestamp - a.timestamp)[0];

      const previousHighest = scores
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(1, scores.length)
        .sort((x, y) => x.score - y.score)
        .reverse()[0];

      if (mostRecent.score > previousHighest.score) {
        this.setState({
          isHighest: true
        });
      }
    }
  }

  render() {
    const { scores, showFinalScore, startGame } = this.props;
    const { isHighest } = this.state;

    return (
      <>
        <OneHundredVh minus={77}>
          <Centraliser>
            {showFinalScore && isHighest ? 'New high score!' : ''}
            {!showFinalScore && (
              <GameTitle title="CLICKTANGLES" primary={false} />
            )}
            {showFinalScore && <FinalScore scores={scores} />}
            <StartButton
              startGame={startGame}
              buttonText={showFinalScore ? 'Play again' : 'Play'}
            />

            {scores.length > 1 && <Scores scores={scores} />}
          </Centraliser>
        </OneHundredVh>
        <Footer />
      </>
    );
  }
}

// const Summary = ({ scores, startGame, showFinalScore }) => {

//   let mostRecent, previousHighest, check;

//   if (scores.length > 0) {
//     check = true;
//     mostRecent = scores.sort((a, b) => b.timestamp - a.timestamp)[0];

//     previousHighest = scores
//       .sort((a, b) => b.timestamp - a.timestamp)
//       .slice(1, scores.length)
//       .sort((x, y) => x.score - y.score)
//       .reverse()[0];
//   } else {
//     check = false;
//   }

//   return (
//     <>
//       <Centraliser>
//         {/* {check && mostRecent.score > previousHighest.score
//           ? 'New high score'
//           : ''} */}
//         {!showFinalScore && <GameTitle title="CLICKTANGLES" primary={false} />}
//         {showFinalScore && <FinalScore scores={scores} />}
//         <StartButton
//           startGame={startGame}
//           buttonText={showFinalScore ? 'Play again' : 'Play'}
//         />

//         {scores.length > 1 && (
//           <>
//             <Scores scores={scores} />
//             {/* <HighScore scores={scores} />
//           <RecentScores scores={scores} /> */}
//           </>
//         )}
//       </Centraliser>
//       <Footer />
//     </>
//   );
// };

Summary.propTypes = {
  scores: PropTypes.arrayOf(
    PropTypes.shape({
      device: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired
    })
  ).isRequired,
  startGame: PropTypes.func.isRequired
};

export default React.memo(Summary);
