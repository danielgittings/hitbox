import React from 'react';
import styled from 'styled-components';

import HighScore from './HighScore';
import RecentScores from '../components/RecentScores';

const StyledScores = styled.div`
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  margin: 0;
  width: 100%;
  color: black;
`;

const Scores = ({ scores, goBack }) => {
  return (
    <StyledScores>
      <button onClick={goBack}>{'<- Go back'}</button>
      <HighScore scores={scores} />
      <RecentScores scores={scores} />
    </StyledScores>
  );
};

export default Scores;
