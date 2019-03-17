import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GameTitle from '../../components/GameTitle';
import Button from '../../components/Button';
import Centraliser from '../../components/Centraliser';

import {
  StyledWhiteWrapper,
  StyledPadding30Col
} from '../../components/StyledComponents';

const SubHeading = styled.h3`
  font-size: 2rem;
  margin: 10px 0 0;
  color: ${props => props.theme.gray};
  font-weight: 300;
  text-align: center;
  line-height: 2.5rem;
`;

const Title = ({ startGame }) => (
  <Centraliser>
    <StyledWhiteWrapper>
      <StyledPadding30Col>
        <GameTitle title="CLICKTANGLES" primary />
        <SubHeading>Click the blue one.</SubHeading>
      </StyledPadding30Col>
      <StyledPadding30Col>
        <Button primary func={startGame} buttonText={'Play'} />
      </StyledPadding30Col>
    </StyledWhiteWrapper>
  </Centraliser>
);

Title.propTypes = {
  startGame: PropTypes.func.isRequired
};

export default Title;
