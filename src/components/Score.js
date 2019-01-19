import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { distanceInWordsToNow } from 'date-fns';

import PhoneIcon from '../icons/PhoneIcon';
import DesktopIcon from '../icons/DesktopIcon';

const StyledScore = styled.div`
  color: white;
  margin: 5px 0;

  > span {
    padding: 0 10px 0 0;
  }
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

  console.log(when);

  return (
    <StyledScore>
      <span>
        <DeviceIcon />
      </span>
      <span>{score}</span>
      <span>{when} ago</span>
    </StyledScore>
  );
};

Score.propTypes = {
  type: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
};

export default Score;
