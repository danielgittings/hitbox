import React from 'react';
import styled from 'styled-components';

const StyledHighScore = styled.p`
  font-size: 1.5rem;
  margin: 1rem 0;
  color: rebeccapurple;
  text-align: center;
`;

const HighScore = () => {
  return <StyledHighScore>New high score!</StyledHighScore>;
};

export default HighScore;
