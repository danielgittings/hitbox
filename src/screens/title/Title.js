import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GameTitle from '../../components/GameTitle';
import Button from '../../components/Button';
import Centraliser from '../../components/Centraliser';

import media from '../../utils/breakpoints';

import {
  StyledWhiteWrapper,
  StyledPadding30Col
} from '../../components/StyledComponents';

const SubHeading = styled.h3`
  font-size: 1.5rem;
  margin: 10px 0 0;
  color: ${props => props.theme.gray};
  font-weight: 500;
  text-align: center;

  ${media.mdPhone`
    font-size: 2rem;
  `}
`;

const Title = ({ startGame }) => (
  <Centraliser>
    <StyledWhiteWrapper>
      <StyledPadding30Col>
        <GameTitle title="HITBOX" primary />
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
