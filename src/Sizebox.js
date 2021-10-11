import React, { Component} from 'react';

import './App.css';

class Sizebox extends Component {
  render() {
    return (
      <div>
        <input id={this.props.ids} checked={this.props.val} onChange={this.props.checkboxClicked} type="checkbox" />
        <span>{this.props.siz}</span>
      </div>
    );
  }
}

export default Sizebox;
