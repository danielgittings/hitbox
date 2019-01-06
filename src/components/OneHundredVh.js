import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

class OneHundredvh extends Component {
  state = {
    viewportHeight: null
  };

  componentDidMount() {
    this.setHeight();

    window.addEventListener('resize', debounce(this.setHeight, 300));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setHeight);
  }

  setHeight = () => {
    let height = window.innerHeight;

    if (this.props.minus) {
      height = height - this.props.minus;
    }

    this.setState({
      viewportHeight: height
    });
  };

  render() {
    const { viewportHeight } = this.state;

    return (
      <div style={{ height: `${viewportHeight}px` }}>{this.props.children}</div>
    );
  }
}

OneHundredvh.propTypes = {
  children: PropTypes.node.isRequired,
  minus: PropTypes.number
};

export default OneHundredvh;
