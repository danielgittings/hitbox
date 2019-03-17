import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import HighScore from './HighScore';
import RecentScores from '../components/RecentScores';
import BackIcon from '../icons/BackIcon';

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
  padding: 15px 20px;
  border-radius: 3px;
  display: flex;
  flex-direction: row:
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${props => props.theme.black10};
  }
`;

const StyledBackIcon = styled(BackIcon)`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const StyledStickyHeader = styled.div`
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.white};
  border-radius: 5px 5px 0 0;
`;

const Scores = ({ scores, goBack }) => {
  return (
    <StyledScores>
      <StyledStickyHeader>
        <StyledBackButton onClick={goBack}>
          <StyledBackIcon />
          <span>Back</span>
        </StyledBackButton>
      </StyledStickyHeader>
      <HighScore scores={scores} />
      <RecentScores scores={scores} />
    </StyledScores>
  );
};

Scores.propTypes = {
  scores: PropTypes.array.isRequired,
  goBack: PropTypes.func.isRequired
};

export default Scores;
