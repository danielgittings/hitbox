import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TimerContainer = styled.div`
  height: 130px;
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
