import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  border-top: 1px solid #ddd;
  text-align: center;
  display: flex;
  justify-content: space-between;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h4>Made by Dan</h4>
      <h4>GitHub</h4>
    </StyledFooter>
  );
};

export default Footer;
