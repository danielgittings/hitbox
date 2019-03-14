import React from 'react';
import styled from 'styled-components';

import HighScore from './HighScore';
import RecentScores from '../components/RecentScores';

const StyledScores = styled.div`
  display: block;
  overflow-y: auto;
  margin: 0;
  width: 100%;
  color: black;
  border-radius: 5px;
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

const StyledStickyHeader = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  border-radius: 5px 5px 0 0;
`;

const Scores = ({ scores, goBack }) => {
  return (
    <StyledScores>
      <StyledStickyHeader>
        <StyledBackButton onClick={goBack}>&larr; Back</StyledBackButton>
      </StyledStickyHeader>
      <HighScore scores={scores} />
      <RecentScores scores={scores} />
    </StyledScores>
  );
};

export default Scores;
