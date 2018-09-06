import React from 'react';
import styled from 'styled-components';
import GameTitle from '../../components/GameTitle';
import StartButton from '../../components/StartButton';
import Centraliser from '../../components/Centraliser';

const Title = ({ startGame }) => (
  <React.Fragment>
    <Centraliser>
      <GameTitle title="Clicktangles"/>
      <StartButton startGame={startGame} />
    </Centraliser>
  </React.Fragment>
);

export default Title;