import React from "react";

const Action = props => {
  console.log(props);
  return (
    <span>
      {/* <i
        className="fa fa-eye fa-looks"
        onClick={() => {}}
        style={{ margin: "6px" }}
      /> */}
      <i
        className="fa fa-edit fa-looks"
        onClick={() => {
          props.history.push({
            pathname: `/article/edit/${props.rowData.original._id}`,
            state: {
              original: props.rowData.original,
              index: props.rowData.index
            }
          });
        }}
        style={{ margin: "6px" }}
      />
      <i
        className="fa fa-trash-o fa-looks"
        onClick={() => props.deleteRow(props.rowData.original._id)}
        style={{ margin: "6px" }}
      />
    </span>
  );
};

export default Action;
