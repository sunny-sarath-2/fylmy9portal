import React from "react";

const Action = props => {
  return (
    <span>
      <i
        className="fa fa-eye fa-looks"
        onClick={() => {
          props.props.history.push("/reviews/edit/123");
          console.log(props);
        }}
        style={{ margin: "6px" }}
      />
      <i
        className="fa fa-edit fa-looks"
        onClick={() => {
          console.log(props);
        }}
        style={{ margin: "6px" }}
      />
      <i
        className="fa fa-trash-o fa-looks"
        onClick={() => {
          console.log(props);
        }}
        style={{ margin: "6px" }}
      />
    </span>
  );
};

export default Action;
