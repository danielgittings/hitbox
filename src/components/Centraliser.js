import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* height: calc(100% - 60px); */
`;

const Centraliser = ({ children }) => <Wrapper>{children}</Wrapper>;

Centraliser.propTypes = {
  children: PropTypes.node.isRequired
};

export default Centraliser;
