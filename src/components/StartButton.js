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
  padding: 20px 30px;
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 5px;
  font-weight: 400;
  transition: all 0.15s ease-in-out;
  /* border: 2px solid rgba(255, 255, 255, .4); */

  ${props =>
    props.secondary &&
    css`
      background-color: rgba(0, 0, 0, 0.15);
      color: #535353;
      margin-top: 10px;

      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    `}

  &:hover,
  &:active,
  &:focus {
    /* border: 2px solid rgba(255, 255, 255, 0.75); */
    /* background-color: ${props => props.theme.buttonHover} */
  }
`;

const StartButton = ({ func, buttonText, secondary }) => (
  <StartGameButton secondary={secondary} onClick={func}>
    {buttonText}
  </StartGameButton>
);

StartButton.propTypes = {
  func: PropTypes.func.isRequired,
  secondary: PropTypes.bool,
  buttonText: PropTypes.string.isRequired
};

export default StartButton;
