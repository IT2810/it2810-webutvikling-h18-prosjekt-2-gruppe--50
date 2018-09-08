import React, { Component } from 'react';

class Tab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
      tabNr: props.tabNr
    }

    this.onClick = this.onClick.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      active: newProps.active 
    });
  }

  onClick() {
    console.log(this.state.tabNr)
    this.props.onSelect(this.state.tabNr)
  }

  render() {
    let activeClassName = this.state.active ? "active" : ""
    
    return (
      <div className={'Tab ' + activeClassName} onClick={this.onClick}>
        <button>
          { this.props.name }
        </button>
      </div>
    )
  }
}

export default Tab;