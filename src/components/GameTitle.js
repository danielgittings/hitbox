import React from 'react';
import styled from 'styled-components';

const MainTitle = styled.h1`
  text-align: center;
  font-size: 5rem;
`;

const GameTitle = ({ title }) => (
  <React.Fragment>
    <MainTitle>{ title }</MainTitle>
  </React.Fragment>
);

export default GameTitle;
