import React, { Component } from 'react';
import { TextField } from 'material-ui';

class Signs extends Component {

  handleChange = event => {
    this.props.onChange({ text: event.target.value });
  };

  render() {
    return (
      <main>
        <h1>
          Signs
        </h1>
        <TextField
          fullWidth
          label="Text"
          id="text"
          value={this.props.text}
          onChange={this.handleChange}
        />
        <p>
          {this.props.text}
        </p>
      </main>
    );
  }
}

export default Signs;
