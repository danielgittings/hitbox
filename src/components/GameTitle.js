import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import media from '../utils/breakpoints';

const MainTitle = styled.h1`
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-size: 2rem;
  margin: 0 0 0.5rem;
  /* color: ${props => props.theme.primaryText}; */
  color: #333;
  /* text-shadow: 2px 2px rgba(0, 0, 0, 0.05); */

  ${media.tablet`
    font-size: 3rem;
  `}

  ${media.desktop`
    font-size: 4rem;
  `}
`;

const GameTitle = ({ title, primary }) => (
  <MainTitle primary={primary}>{title}</MainTitle>
);

GameTitle.propTypes = {
  title: PropTypes.string.isRequired,
  primary: PropTypes.bool
};

export default GameTitle;
