import React, { Component, PropTypes } from 'react';
import { Table, Column, Cell } from 'fixed-data-table';
import LinkCell from '../fixed-data-table/link-cell';
import TextCell from '../fixed-data-table/text-cell';
import DateCell from '../fixed-data-table/date-cell';
import ToggleCell from '../fixed-data-table/toggle-cell';

export default class MainView extends Component {
  constructor(props) {
    super(props);

    this.state = { domains: this.props.domain.data };
  }

  render() {
    return (
      <div className="container">
        <div className="domain-title clearfix">
          <h3 className="pull-left">Your Domains</h3>
        </div>
        <hr className="title-hr" />
        <Table
          rowHeight={40}
          headerHeight={40}
          rowsCount={this.state.domains.length}
          width={900}
        height={562}>
          <Column
            header={<Cell>Domain</Cell>}
            cell={
            <LinkCell
              data={this.state.domains}
              field="name"
            />
            }
            width={300}
          />
          <Column
            header={<Cell>Expiring</Cell>}
            cell={
            <DateCell
              data={this.state.domains}
              field="expiring_date"
            />
            }
            width={150}
          />
          <Column
            header={<Cell>Registered</Cell>}
            cell={
            <DateCell
              data={this.state.domains}
              field="registered_date"
            />
            }
            width={150}
          />
          <Column
            header={<Cell>Name Server</Cell>}
            cell={
            <TextCell
              data={this.state.domains}
              field="name_server"
            />
            }
            width={150}
          />
          <Column
            header={<Cell>Private WHOIS</Cell>}
            cell={
            <ToggleCell
                data={this.state.domains}
                handleChange={this.props.onUpdateWhoisPrivacy}
                field="private_whois"
              />
            }
            width={150}
          />
          </Table>
      </div>
    );
  }
}
