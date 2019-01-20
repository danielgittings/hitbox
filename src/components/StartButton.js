import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StartGameButton = styled.button`
  margin: 1.5rem 0;
  padding: ${props => props.theme.padding};
  background: transparent;
  outline: none;
  border: none;
  -webkit-appearance: none;
  background-color: ${props => props.theme.button}
  color: ${props => props.theme.white};
  text-transform: uppercase;
  padding: 20px 80px;
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 5px;
  font-weight: 300;
  transition: all 0.15s ease-in-out;
  border: 2px solid rgba(255, 255, 255, .4);

  &:hover,
  &:active,
  &:focus {
    border: 2px solid rgba(255, 255, 255, 0.75);
    /* background-color: ${props => props.theme.buttonHover} */
  }
`;

const StartButton = ({ startGame, buttonText }) => (
  <StartGameButton onClick={startGame}>{buttonText}</StartGameButton>
);

StartButton.propTypes = {
  startGame: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default StartButton;
