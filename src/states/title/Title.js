import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GameTitle from '../../components/GameTitle';
import StartButton from '../../components/StartButton';
import Centraliser from '../../components/Centraliser';

import {
  StyledWhiteWrapper,
  StyledPadding30Col
} from '../../components/StyledComponents';

const SubHeading = styled.h3`
  font-size: 1.7rem;
  margin: 0 0 4rem;
  color: #cab5be;
  font-weight: 300;
  text-align: center;
  line-height: 2.5rem;
`;

const Title = ({ startGame }) => (
  <Centraliser>
    <StyledWhiteWrapper>
      <StyledPadding30Col>
        <GameTitle title="CLICKTANGLES" primary />
        <SubHeading>Click the blue square.</SubHeading>
        <StartButton func={startGame} buttonText={'Play'} />
      </StyledPadding30Col>
    </StyledWhiteWrapper>
  </Centraliser>
);

Title.propTypes = {
  startGame: PropTypes.func.isRequired
};

export default Title;
