import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const data = [
  {
    owner: 'Tanner Linsley',
    vehical_number: 'AP 26 AQ 5678',
    devices_id: 123457890,
    status: 'active'
  },
  {
    owner: 'Tanner Linsley',
    vehical_number: 'AP 26 AQ 5678',
    devices_id: 123457890,
    status: 'active'
  },
  {
    owner: 'Tanner Linsley',
    vehical_number: 'AP 26 AQ 5678',
    devices_id: 123457890,
    status: 'active'
  },
  {
    owner: 'Tanner Linsley',
    vehical_number: 'AP 26 AQ 5678',
    devices_id: 123457890,
    status: 'active'
  },
  {
    owner: 'Tanner Linsley',
    vehical_number: 'AP 26 AQ 5678',
    devices_id: 123457890,
    status: 'active'
  }
];

const Table = props => {
  let { columns } = props;
  return (
    <ReactTable
      data={data}
      columns={columns}
      loading={false}
      showPaginationTop={true}
      defaultPageSize={20}
      style={{ color: 'grey', marginTop: '20px' }}
    />
  );
};

export default Table;
