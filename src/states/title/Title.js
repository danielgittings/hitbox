import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import OneHundredVh from '../../components/OneHundredVh';
import GameTitle from '../../components/GameTitle';
import StartButton from '../../components/StartButton';
import Centraliser from '../../components/Centraliser';
import Footer from '../../components/Footer';

import media from '../../utils/breakpoints';

const SubHeading = styled.h3`
  font-size: 1.7rem;
  margin: 0 0 4rem;
  /* color: ${props => props.theme.primaryText}; */
  color: #cab5be;
  font-weight: 300;
  text-align: center;
  line-height: 2.5rem;
`;

const StyledSummary = styled.div`
  background-color: white;
  width: 100%;
  max-width: 500px;
  border-radius: 5px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.tablet`
    padding: 50px;
  `}
`;

const Title = ({ startGame }) => (
  <>
    <OneHundredVh minus={77}>
      <Centraliser>
        <StyledSummary>
          <GameTitle title="CLICKTANGLES" primary />
          <SubHeading>Click the blue square.</SubHeading>
          <StartButton func={startGame} buttonText={'Start'} />
        </StyledSummary>
      </Centraliser>
    </OneHundredVh>
    <Footer />
  </>
);

Title.propTypes = {
  startGame: PropTypes.func.isRequired
};

export default Title;
