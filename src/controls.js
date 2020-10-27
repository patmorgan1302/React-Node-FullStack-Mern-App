import React from 'react';

export default class Controls extends React.Component {

  render() {
      
    return (
      <div>
        <div>
          <button type="text" onClick={() => this.props.updateIntervalSetting(-1)}>-</button>
          {this.props.updateInterval}
          <button type="text" onClick={() => this.props.updateIntervalSetting(1)}>+</button>
        </div>
        <button onClick={this.props.handleAddTimer}>Add New Student</button>
      </div>
    );
  }
};


