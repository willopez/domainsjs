import React, { Component, PropTypes } from 'react';
import { Table, Column, Cell } from 'fixed-data-table';
import TextCell from '../fixed-data-table/text-cell';

export default class DomainDetailView extends Component {
  constructor(props) {
    super(props);

    this.state = { domainDetail: this.props.domainDetail };
  }

  render() {
    return (
      <div className="container">
        <ol className="breadcrumb">
            <li><a href="/">&#8592; Back</a></li>
        </ol>
        <div className="domain-title clearfix">
          <h3 className="pull-left">{this.state.domainDetail.name}</h3>
        </div>
        <hr className="title-hr" />
        <Table
          rowHeight={40}
          headerHeight={40}
          rowsCount={this.state.domainDetail.record.length}
          width={900}
        height={202}>
          <Column
            header={<Cell>Name / Host</Cell>}
            cell={
            <TextCell
              data={this.state.domainDetail.record}
              field="hostname"
            />
            }
            width={400}
          />
          <Column
            header={<Cell>TTL</Cell>}
            cell={
            <TextCell
              data={this.state.domainDetail.record}
              field="ttl"
            />
            }
            width={150}
          />
          <Column
            header={<Cell>Type</Cell>}
            cell={
            <TextCell
              data={this.state.domainDetail.record}
              field="type"
            />
            }
            width={150}
          />
          <Column
            header={<Cell>Destination / IP Adrress</Cell>}
            cell={
            <TextCell
              data={this.state.domainDetail.record}
              field="ip_address"
            />
            }
            width={200}
          />
          </Table>
      </div>
    );
  }
}
