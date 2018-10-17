import React from 'react';
import GameTitle from '../../components/GameTitle';
import StartButton from '../../components/StartButton';
import Centraliser from '../../components/Centraliser';
import styled from 'styled-components';

const SubHeading = styled.h3`
  font-size: 30px;
  margin: 0 0 4rem;
  color: #333333;
  text-align: center;
`;

const Title = ({ startGame }) => (
  <>
    <Centraliser>
      <GameTitle title="Clicktangles" primary />
      <SubHeading>
        Click the blue square.
        <br />
        As fast as you can.
      </SubHeading>
      <StartButton startGame={startGame} buttonText={'Start'} />
    </Centraliser>
  </>
);

export default Title;
