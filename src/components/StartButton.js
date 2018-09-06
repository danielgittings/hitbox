import React from 'react';
import styled from 'styled-components';

const StartGameButton = styled.button`
  padding: 20px;
  background: transparent;
  outline: none;
  border: none;
  -webkit-appearance: none;
  background-color: #0088cc;
  color: white;
  cursor: pointer;
  width: 200px;
`;

const StartButton = ({ startGame }) => (
  <StartGameButton onClick={ startGame }>
    Start
  </StartGameButton>
);

export default StartButton;
