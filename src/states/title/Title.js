import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GameTitle from '../../components/GameTitle';
import StartButton from '../../components/StartButton';
import Centraliser from '../../components/Centraliser';
import Footer from '../../components/Footer';

const SubHeading = styled.h3`
  font-size: 30px;
  margin: 0 0 4rem;
  color: ${props => props.theme.primaryText};
  font-weight: 300;
  text-align: center;
  line-height: 2.5rem;
`;

const Title = ({ startGame }) => (
  <>
    <Centraliser>
      <GameTitle title="CLICKTANGLES" primary />
      <SubHeading>
        Click the blue square.
        <br />
        As fast as you can.
      </SubHeading>
      <StartButton startGame={startGame} buttonText={'Start'} />
    </Centraliser>
    <Footer />
  </>
);

Title.propTypes = {
  startGame: PropTypes.func.isRequired
};

export default Title;
