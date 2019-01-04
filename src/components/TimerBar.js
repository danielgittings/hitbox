import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TimerContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
    font-size: 60px;
    margin: 0;
    padding: 0;
    font-weight: 300;
    color: ${props => props.theme.white};
    text-shadow: 2px 2px rgba(0, 0, 0, 0.05);
  }
`;

const TimerBar = ({ secondsLeft }) => (
  <TimerContainer>
    <h2>{secondsLeft}</h2>
  </TimerContainer>
);

TimerBar.propTypes = {
  secondsLeft: PropTypes.number.isRequired
};

export default TimerBar;
