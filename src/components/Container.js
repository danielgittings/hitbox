import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 750px;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
