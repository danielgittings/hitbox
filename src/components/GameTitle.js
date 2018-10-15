import React from 'react';
import styled from 'styled-components';

// prettier-ignore
const MainTitle = styled.h1`
  text-align: center;
  font-family: sans-serif;
  font-size: ${props => props.primary ? "5rem" : "3rem"};
  margin: 0;
`;

const GameTitle = ({ title, primary }) => {
  let props = { title };

  if (primary) {
    props.primary = primary;
  }

  return (
    <>
      <MainTitle {...props}>{title}</MainTitle>
    </>
  );
};

export default GameTitle;
