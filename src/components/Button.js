import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  margin: 0;
  padding: ${props => props.theme.padding};
  outline: none;
  border: none;
  -webkit-appearance: none;
  text-transform: uppercase;
  padding: 20px 30px;
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 5px;
  transition: all 0.15s ease-in-out;
  font-weight: 500;

  ${props =>
    props.primary &&
    css`
      background-color: ${props => props.theme.button};
      color: ${props => props.theme.white};

      &:hover {
        background-color: #1a5793;
      }
    `}

  ${props =>
    props.secondary &&
    css`
      background-color: rgba(0, 0, 0, 0.05);
      color: ${props => props.theme.emperor};
      margin-top: 10px;

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    `}
`;

const Button = ({ func, buttonText, primary, secondary }) => (
  <StyledButton primary={primary} secondary={secondary} onClick={func}>
    {buttonText}
  </StyledButton>
);

Button.propTypes = {
  func: PropTypes.func.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  buttonText: PropTypes.string.isRequired
};

export default Button;
