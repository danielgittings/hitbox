import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledScoreContainer = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledScore = styled.span`
  font-size: 8rem;
  color: ${props => props.theme.mineShaft};
`;

const StyledText = styled.span`
  font-size: 1.5rem;
  font-family: 300;
  color: ${props => props.theme.mineShaft};
`;

const FinalScore = ({ scores }) => {
  const mostRecent = scores.sort((a, b) => b.timestamp - a.timestamp)[0];

  return (
    <StyledScoreContainer>
      <StyledText>You scored</StyledText>
      <StyledScore>{mostRecent.score}</StyledScore>
    </StyledScoreContainer>
  );
};

FinalScore.propTypes = {
  scores: PropTypes.arrayOf(
    PropTypes.shape({
      score: PropTypes.number.isRequired,
      timestamp: PropTypes.number.isRequired
    })
  )
};

export default FinalScore;
