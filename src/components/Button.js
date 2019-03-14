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
  /* font-weight: 400; */
  transition: all 0.15s ease-in-out;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;


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
`;

const Button = ({ func, buttonText, secondary }) => (
  <StartGameButton secondary={secondary} onClick={func}>
    {buttonText}
  </StartGameButton>
);

Button.propTypes = {
  func: PropTypes.func.isRequired,
  secondary: PropTypes.bool,
  buttonText: PropTypes.string.isRequired
};

export default Button;
