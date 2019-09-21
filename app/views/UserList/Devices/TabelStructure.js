import React, { Component } from 'react';
import Action from './Action';

const columns = [
  {
    Header: 'Owner',
    accessor: 'owner',
    className: 'react-table-center'
  },
  {
    Header: 'Vehical Number',
    accessor: 'vehical_number',
    className: 'react-table-center'
  },
  {
    Header: 'Device Id',
    accessor: 'devices_id',
    className: 'react-table-center'
  },
  {
    Header: 'Status',
    accessor: 'status',
    className: 'react-table-center'
  },
  {
    Header: 'ACTION', // Custom header components!
    // accessor: "ACTION",
    Cell: row => {
      console.log(row);
      return <Action />;
    },
    className: 'react-table-center'
  }
];

export default columns;
