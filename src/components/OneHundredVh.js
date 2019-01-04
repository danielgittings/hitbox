import React, { Component } from 'react';

class OneHundredvh extends Component {
  state = {
    viewportHeight: null
  };

  componentDidMount() {
    let height = window.innerHeight;

    if (this.props.minus) {
      height = height - this.props.minus;
    }

    this.setState({
      viewportHeight: height
    });
  }

  render() {
    const { viewportHeight } = this.state;

    return (
      <div className="hello" style={{ height: `${viewportHeight}px` }}>
        {this.props.children}
      </div>
    );
  }
}

export default OneHundredvh;
