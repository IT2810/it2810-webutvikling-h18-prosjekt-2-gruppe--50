import React, { Component } from 'react';

class Tab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: props.active
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      active: newProps.active 
    });
  }

  render() {
    let activeClassName = this.state.active ? "active" : ""
    
    return (
      <div className={'Tab ' + activeClassName}>
        <button>
          { this.props.name }
        </button>
      </div>
    )
  }
}

export default Tab;