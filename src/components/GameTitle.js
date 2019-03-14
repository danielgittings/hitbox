import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import media from '../utils/breakpoints';

const MainTitle = styled.h1`
  text-align: center;
  /* font-family: 'Lato', sans-serif; */
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
  margin: 0 0 0.5rem;
  color: #333;
  /* letter-spacing: 4.5px; */

  ${media.mdPhone`
    font-size: 2.1rem;
  `}

  ${media.bigPhone`
    font-size: 3.65rem;
  `}

  ${media.tablet`
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
