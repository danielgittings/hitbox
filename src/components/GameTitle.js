import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainTitle = styled.h1`
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-size: ${props => (props.primary ? '4.25rem' : '4.25rem')};
  margin: 0 0 25px;
  color: ${props => props.theme.primaryText};
`;

const GameTitle = ({ title, primary }) => (
  <MainTitle primary={primary}>{title}</MainTitle>
);

GameTitle.propTypes = {
  title: PropTypes.string.isRequired,
  primary: PropTypes.bool
};

export default GameTitle;
