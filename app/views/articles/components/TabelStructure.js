import React from "react";
import Action from "./Action";

const columns = (props, deleteRow) => {
  return [
    {
      Header: "Row",
      Cell: row => row.index + 1,
      className: "react-table-center"
    },
    {
      Header: "Title",
      accessor: "title",
      className: "react-table-center"
    },
    {
      Header: "Status",
      Cell: row => row.original.status.toString(),
      className: "react-table-center"
    },
    {
      Header: "ACTION", // Custom header components!
      // accessor: "ACTION",
      Cell: row => {
        return <Action rowData={row} {...props} deleteRow={deleteRow} />;
      },
      className: "react-table-center"
    }
  ];
};

export default columns;
