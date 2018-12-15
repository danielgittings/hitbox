import React from 'react';
import styled from 'styled-components';

import HighScore from '../components/HighScore';
import RecentScores from '../components/RecentScores';

const StyledScores = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  margin: 100px 0 50px;
  width: 100%;
`;

const StyledScoreContainer = styled.div`
  width: 100%;
  background-color: white;
  padding: ${props => props.theme.padding};
  margin: 30px 20px 0;
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.09);
  border-radius: 5px;

  h4 {
    margin: 0;
  }
`;

const Scores = ({ scores }) => {
  return (
    <StyledScores>
      <StyledScoreContainer>
        <HighScore scores={scores} />
      </StyledScoreContainer>
      <StyledScoreContainer>
        <RecentScores scores={scores} />
      </StyledScoreContainer>
    </StyledScores>
  );
};

export default Scores;
