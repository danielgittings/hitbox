import React from 'react';
import styled from 'styled-components';

const StartGameButton = styled.button`
  padding: 20px;
  background: transparent;
  outline: none;
  border: none;
  -webkit-appearance: none;
  background-color: #91baf9;
  color: #333;
  cursor: pointer;
  width: 200px;
  font-size: 2rem;
  border-radius: 5px;
  font-family: sans-serif;
`;

const StartButton = ({ startGame, buttonText }) => (
  <StartGameButton onClick={startGame}>{buttonText}</StartGameButton>
);

export default StartButton;
