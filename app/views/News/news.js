import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

import { Table } from "../../components/Table";

import { TableStructure } from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const News = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Table columns={TableStructure} />
    </div>
  );
};

export default News;
