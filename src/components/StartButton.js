import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StartGameButton = styled.button`
  margin: 0;
  padding: ${props => props.theme.padding};
  background: transparent;
  outline: none;
  border: none;
  -webkit-appearance: none;
  background-color: ${props => props.theme.button}
  color: ${props => props.theme.white};
  text-transform: uppercase;
  padding: 20px;
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 5px;
  font-weight: 300;
  transition: all 0.15s ease-in-out;
  /* border: 2px solid rgba(255, 255, 255, .4); */

  ${props =>
    props.secondary &&
    css`
      background-color: yellowgreen;
      color: white;
      margin-top: 10px;
    `}

  &:hover,
  &:active,
  &:focus {
    border: 2px solid rgba(255, 255, 255, 0.75);
    /* background-color: ${props => props.theme.buttonHover} */
  }
`;

const StartButton = ({ func, buttonText, secondary }) => (
  <StartGameButton secondary={secondary} onClick={func}>
    {buttonText}
  </StartGameButton>
);

StartButton.propTypes = {
  startGame: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default StartButton;
