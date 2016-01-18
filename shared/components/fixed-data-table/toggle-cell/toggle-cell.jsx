import React, { Component, PropTypes } from 'react';
import { Cell } from 'fixed-data-table';
import Toggle from 'react-toggle';

export default class ToggleCell extends Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    const defaultState = data[rowIndex][field];
    return (
      <Cell {...props}>
        <Toggle
          defaultChecked={defaultState}
        />
      </Cell>
    );
  }
}
