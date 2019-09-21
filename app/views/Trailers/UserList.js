import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { CustomTable } from './components';

import TableStructure from './Devices/TabelStructure';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const UserList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CustomTable columns={TableStructure} />
    </div>
  );
};

export default UserList;
