import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import OneHundredVh from '../../components/OneHundredVh';
import GameTitle from '../../components/GameTitle';
import StartButton from '../../components/StartButton';
import FinalScore from '../../components/FinalScore';
import Centraliser from '../../components/Centraliser';
import Scores from '../../components/Scores';
import Footer from '../../components/Footer';
import NewHighScore from '../../components/NewHighScore';

import media from '../../utils/breakpoints';

const StyledSummary = styled.div`
  background-color: white;
  width: 100%;
  max-width: 500px;
  border-radius: 5px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.tablet`
    padding: 50px;
  `}
`;

const StyledRecentButton = styled.button`
  background-color: yellowgreen;
  padding: 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

class Summary extends Component {
  state = {
    isHighest: false,
    score: true,
    recents: false
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

  showRecents = () => {
    this.setState({
      score: false,
      recents: true
    });
  };

  showScore = () => {
    this.setState({
      score: true,
      recents: false
    });
  };

  render() {
    const { scores, showFinalScore, startGame } = this.props;
    const { isHighest, recents, score } = this.state;

    return (
      <>
        <OneHundredVh minus={77}>
          <Centraliser>
            <StyledSummary>
              {score && (
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    {!showFinalScore && (
                      <GameTitle title="CLICKTANGLES" primary={false} />
                    )}
                    {showFinalScore && <FinalScore scores={scores} />}
                    {showFinalScore && isHighest && <NewHighScore />}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '40px 10px 0'
                    }}
                  >
                    <StartButton
                      func={startGame}
                      buttonText={showFinalScore ? 'Play again' : 'Play'}
                    />
                    {!recents && scores.length > 1 && (
                      <StartButton
                        buttonText="Show recent"
                        secondary
                        func={this.showRecents}
                      />
                    )}
                  </div>
                </div>
              )}

              {recents && scores.length > 1 && (
                <Scores goBack={this.showScore} scores={scores} />
              )}
            </StyledSummary>
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
