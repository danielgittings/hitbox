import React from 'react';
import styled from 'styled-components';

const TimerContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
    font-size: 50px;
    margin: 0;
    padding: 0;
  }
`;

const TimerBar = ({ secondsLeft }) => (
  <TimerContainer>
    <h2>{secondsLeft}</h2>
  </TimerContainer>
);

export default TimerBar;
