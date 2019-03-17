import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import media from '../utils/breakpoints';

const MainTitle = styled.h1`
  text-align: center;
  font-weight: 900;
  font-size: 3rem;
  margin: 0 0 0.5rem;
  color: ${props => props.theme.mineShaft};

  ${media.mdPhone`
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
