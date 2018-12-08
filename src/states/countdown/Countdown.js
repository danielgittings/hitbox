import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Centraliser from '../../components/Centraliser';

const CountdownNumber = styled.p`
  font-size: 15rem;
  font-family: sans-serif;
`;

class Countdown extends Component {
  state = {
    secondsLeft: 3400,
    timer: null
  };

  componentDidMount() {
    const timer = setInterval(this.decrementSeconds, 100);
    this.setState({
      timer
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  decrementSeconds = () => {
    if (this.state.secondsLeft > 500) {
      this.setState(prevState => ({
        secondsLeft: prevState.secondsLeft - 100
      }));
    } else {
      this.props.endCountdown();
    }
  };

  render() {
    const { secondsLeft } = this.state;

    return (
      <>
        <Centraliser>
          <CountdownNumber>{Math.round(secondsLeft / 1000)}</CountdownNumber>
        </Centraliser>
      </>
    );
  }
}

Countdown.propTypes = {
  endCountdown: PropTypes.func.isRequired
};

export default Countdown;
