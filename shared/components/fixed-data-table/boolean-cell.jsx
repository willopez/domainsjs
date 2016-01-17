import React, { Component, PropTypes } from 'react';
import { Cell } from 'fixed-data-table';

export default class BooleanCell extends Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    const text = data[rowIndex][field];
    return (
      <Cell {...props}>
         {text ? 'On' : 'Off'}
      </Cell>
    );
  }
}
