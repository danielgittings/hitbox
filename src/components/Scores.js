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
  border-radius: 5px;
  overflow: hidden;
`;

const StyledBackButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  padding: 15px 30px;
  border-radius: 3px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Scores = ({ scores, goBack }) => {
  return (
    <StyledScores>
      <div style={{ position: 'sticky', top: 0, backgroundColor: 'white' }}>
        <StyledBackButton onClick={goBack}>&larr; Back</StyledBackButton>
      </div>
      <HighScore scores={scores} />
      <RecentScores scores={scores} />
    </StyledScores>
  );
};

export default Scores;
