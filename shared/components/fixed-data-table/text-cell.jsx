import React, { Component, PropTypes } from 'react';
import { Cell } from 'fixed-data-table';

export default class TextCell extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired,
    field: PropTypes.string.isRequired,
  }

  render() {
    const { rowIndex, field, data, ...props } = this.props;
    const text = data[rowIndex][field];
    return (
      <Cell {...props}>
        {text}
      </Cell>
    );
  }
}
