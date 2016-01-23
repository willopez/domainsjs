import React, { Component, PropTypes } from 'react';
import { Cell } from 'fixed-data-table';
import Toggle from 'react-toggle';

export default class ToggleCell extends Component {
  constructor() {
    super();

    // bind to this object instance
    this.onUpdate = ::this.onUpdate;
  }

  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    field: PropTypes.string.isRequired,
  }

  onUpdate(event) {
    this.setState({ private: event.target.checked });
    const id = this.props.data[this.props.rowIndex].id;
    this.props.handleChange(id, event.target.checked);
  }

  render() {
    const { rowIndex, field, data, ...props } = this.props;
    const defaultState = data[rowIndex][field];
    return (
      <Cell {...props}>
        <Toggle
          onChange={this.onUpdate}
          defaultChecked={defaultState}
        />
      </Cell>
    );
  }
}
