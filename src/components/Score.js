import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { distanceInWordsToNow } from 'date-fns';

import PhoneIcon from '../icons/PhoneIcon';
import DesktopIcon from '../icons/DesktopIcon';

const StyledScore = styled.div`
  color: white;
  margin: 5px 0;
  display: flex;
  align-items: center;

  > span {
    padding: 0 10px 0 0;
  }
`;

const StyledScoreNumber = styled.span`
  font-size: 2rem;
`;

const DEVICE_MAPPING = {
  mobile: PhoneIcon,
  desktop: DesktopIcon
};

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
      <span>
        <DeviceIcon />
      </span>
      <StyledScoreNumber>{score}</StyledScoreNumber>
      <span>{when} ago</span>
    </StyledScore>
  );
};

Score.propTypes = {
  type: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
};

export default Score;
