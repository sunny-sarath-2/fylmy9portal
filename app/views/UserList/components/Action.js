import React from "react";

const Action = props => {
  return (
    <span>
      <i
        className="fa fa-eye fa-looks"
        onClick={() => {
          props.props.history.push("/users/edit/123");
          
        }}
        style={{ margin: "6px" }}
      />
      <i
        className="fa fa-edit fa-looks"
        onClick={() => {
          
        }}
        style={{ margin: "6px" }}
      />
      <i
        className="fa fa-trash-o fa-looks"
        onClick={() => {
          
        }}
        style={{ margin: "6px" }}
      />
    </span>
  );
};

export default Action;
