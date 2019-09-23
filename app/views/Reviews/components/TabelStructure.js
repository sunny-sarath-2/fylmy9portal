import React from "react";
import Action from "./Action";

const columns = props => {
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
      Header: "Movie",
      accessor: "movie",
      className: "react-table-center"
    },
    {
      Header: "Director",
      accessor: "movie_director",
      className: "react-table-center"
    },
    {
      Header: "Cast",
      Cell: row => row.original.movie_cast[0],
      // accessor: "movie_cast",
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
        return <Action rowData={row} props={props} />;
      },
      className: "react-table-center"
    }
  ];
};

export default columns;
