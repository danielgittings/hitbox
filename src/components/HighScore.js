import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledScoreContainer = styled.div`
  margin: 0;
  padding: 30px 30px 20px;
  background-color: ${props => props.theme.veniceBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeading = styled.h3`
  color: white;
  display: block;
  margin: 0;
`;

const StyledTrophy = styled.span`
  font-size: 7rem;
  color: ${props => props.theme.white};
`;

const HighScore = ({ scores }) => {
  const top = scores.sort((x, y) => x.score - y.score).reverse()[0];

  return (
    <StyledScoreContainer>
      <StyledHeading>High Score</StyledHeading>
      <StyledTrophy role="img" aria-label="Trophy">
        {top.score}
      </StyledTrophy>
    </StyledScoreContainer>
  );
};

HighScore.propTypes = {
  scores: PropTypes.arrayOf(
    PropTypes.shape({
      score: PropTypes.number.isRequired,
      timestamp: PropTypes.number.isRequired
    })
  )
};

export default HighScore;
