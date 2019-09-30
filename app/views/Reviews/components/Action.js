import React from "react";

const Action = props => {
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
          props.props.history.push({
            pathname: `/reviews/edit/123${props.rowData.original._id}`,
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
        onClick={() => {}}
        style={{ margin: "6px" }}
      />
    </span>
  );
};

export default Action;
