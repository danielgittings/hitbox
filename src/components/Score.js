import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { distanceInWordsToNow } from 'date-fns';

import PhoneIcon from '../icons/PhoneIcon';
import DesktopIcon from '../icons/DesktopIcon';

const StyledScore = styled.div`
  color: #333;
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
  color: #333;
`;

const DEVICE_MAPPING = {
  mobile: PhoneIcon,
  desktop: DesktopIcon
};

const StyledTime = styled.span`
  color: #333;
  margin: 5px 0;
  font-size: 0.95rem;
`;

const StyledTimeIcon = styled.span`
  font-size: 1.25rem;
`;

const Score = ({ type, score, time }) => {
  const DeviceIcon = DEVICE_MAPPING[type];

  const date = new Date(parseInt(time));

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const when = distanceInWordsToNow(
    new Date(year, month, day, hour, minutes, seconds)
  );

  return (
    <StyledScore>
      {/* <span>
        <DeviceIcon />
      </span> */}
      <StyledScoreNumber>{score}</StyledScoreNumber>
      <StyledTime>{when} ago</StyledTime>
    </StyledScore>
  );
};

Score.propTypes = {
  type: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
};

export default Score;
