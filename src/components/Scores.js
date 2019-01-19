import React from 'react';
import styled from 'styled-components';

import HighScore from '../components/HighScore';
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

const Scores = ({ scores }) => {
  return (
    <StyledScores>
      <HighScore scores={scores} />
      <RecentScores scores={scores} />
    </StyledScores>
  );
};

export default Scores;
