import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// prettier-ignore
const MainTitle = styled.h1`
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-size: ${props => props.primary ? "7rem" : '4rem'};
  margin: 0 0 15px;
  color: #444444;
`;

const GameTitle = ({ title, primary }) => (
  <MainTitle primary={primary}>{title}</MainTitle>
);

GameTitle.propTypes = {
  title: PropTypes.string.isRequired,
  primary: PropTypes.bool
};

export default GameTitle;
