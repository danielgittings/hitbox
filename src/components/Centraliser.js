import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Centraliser = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Centraliser;
