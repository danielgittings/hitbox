// eslint-disable-next-line
import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ScreenWidth extends Component {
  state = {
    width: window.innerWidth,
  };

  componentDidMount() {
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
  }

  updateWidth = () => {
    this.setState({
      width: window.innerWidth,
    });
  };

  render() {
    const { width } = this.state;
    return <>{this.props.children(width)}</>;
  }
}

ScreenWidth.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ScreenWidth;
