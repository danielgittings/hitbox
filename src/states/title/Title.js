import React from 'react';
import GameTitle from '../../components/GameTitle';
import StartButton from '../../components/StartButton';
import Centraliser from '../../components/Centraliser';
import styled from 'styled-components';

const SubHeading = styled.h3`
  font-size: 30px;
`;

const Title = ({ startGame }) => (
  <React.Fragment>
    <Centraliser>
      <GameTitle title="Clicktangles" />
      <SubHeading>Click the red square. As fast as you can.</SubHeading>
      <StartButton startGame={startGame} buttonText={'Start'} />
    </Centraliser>
  </React.Fragment>
);

export default Title;
