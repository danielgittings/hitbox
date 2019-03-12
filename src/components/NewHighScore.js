import React from 'react';
import styled from 'styled-components';

const StyledHighScore = styled.p`
  font-size: 1.5rem;
  margin: 1rem 0;
  color: ${props => props.theme.button};
  text-align: center;
`;

const HighScore = () => {
  return (
    <StyledHighScore>
      <span role="img" aria-label="Trophy">
        🏆
      </span>{' '}
      New high score!{' '}
      <span role="img" aria-label="Fire">
        🔥
      </span>
    </StyledHighScore>
  );
};

export default HighScore;
