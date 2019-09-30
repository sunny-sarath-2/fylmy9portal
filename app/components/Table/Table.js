import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

const Table = props => {
  let { columns, data } = props;
  return (
    <ReactTable
      className={"width-full"}
      data={data}
      columns={columns}
      loading={false}
      showPaginationTop={true}
      defaultPageSize={5}
      style={{ color: "grey", marginTop: "20px" }}
    />
  );
};

export default Table;
