import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Centraliser = ({ children }) => <Wrapper>{children}</Wrapper>;

Centraliser.propTypes = {
  children: PropTypes.node.isRequired
};

export default Centraliser;
