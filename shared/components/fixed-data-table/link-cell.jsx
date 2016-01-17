import React, { Component, PropTypes } from 'react';
import { Cell } from 'fixed-data-table';

export default class LinkCell extends Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    const link = data[rowIndex][field];
    return (
      <Cell {...props}>
       <a href={link}>{link}</a>
      </Cell>
    );
  }
}
