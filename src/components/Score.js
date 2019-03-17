import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { formatDistance } from 'date-fns';

const StyledScore = styled.div`
  color: ${props => props.theme.mineShaft};
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    padding: 0 10px 0 0;
  }
`;

const StyledScoreNumber = styled.span`
  font-size: 2.5rem;
  color: ${props => props.theme.mineShaft};
`;

const StyledTime = styled.span`
  color: ${props => props.theme.mineShaft};
  margin: 5px 0;
  font-size: 0.95rem;
`;

const Score = ({ score, time }) => {
  const date = new Date(parseInt(time));

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const when = formatDistance(
    new Date(year, month, day, hour, minutes, seconds),
    Date.now()
  );

  return (
    <StyledScore>
      <StyledScoreNumber>{score}</StyledScoreNumber>
      <StyledTime>{when} ago</StyledTime>
    </StyledScore>
  );
};

Score.propTypes = {
  score: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired
};

export default Score;
