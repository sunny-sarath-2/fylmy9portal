import React from "react";
import Action from "./Action";

const columns = props => {
  return [
    {
      Header: "row",
      id: "row",
      Cell: row => {
        return <div>{row.index + 1}</div>;
      }
    },
    {
      Header: "Title",
      accessor: "title",
      className: "react-table-center"
    },
    {
      Header: "Movie",
      accessor: "movie",
      className: "react-table-center"
    },
    {
      Header: "Movie Director",
      accessor: "movie_director",
      className: "react-table-center"
    },
    {
      Header: "Status",
      accessor: "status",
      className: "react-table-center"
    }
    // {
    //   Header: "ACTION", // Custom header components!
    //   // accessor: "ACTION",
    //   Cell: row => {
    //     return <Action rowData={row} props={props} />;
    //   },
    //   className: "react-table-center"
    // }
  ];
};

export default columns;
