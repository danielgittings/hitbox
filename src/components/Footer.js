import React from 'react';
import styled from 'styled-components';
import GithubIcon from './GithubIcon';

const StyledFooter = styled.footer`
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  text-align: center;
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.primaryText};

  a {
    color: white;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Made by <a href="https://github.com/danielgittings">Daniel Gittings</a>
      </p>
      <p>
        <a href="https://github.com/danielgittings/clicktangles">
          <GithubIcon />
        </a>
      </p>
    </StyledFooter>
  );
};

export default Footer;
