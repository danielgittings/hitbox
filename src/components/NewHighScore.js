import React from 'react';
import styled from 'styled-components';

import media from '../utils/breakpoints';

const StyledHighScore = styled.p`
  font-size: 1.5rem;
  margin: 1rem 0;
  padding: 0 10px;
  color: ${props => props.theme.button};
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.bigPhone`
    padding: 0 30px;
  `};
`;

const StyledEmoji = styled.span`
  margin: 0 10px 10px;
  font-size: 3rem;
`;

const HighScore = () => {
  return (
    <StyledHighScore>
      {/* eslint-disable-next-line  */}
      <StyledEmoji role="img" aria-label="Trophy emoji">
        🏆
      </StyledEmoji>
      <span>New high score!</span>
    </StyledHighScore>
  );
};

export default HighScore;
