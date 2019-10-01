import React from "react";
import { Switch, Route } from "react-router-dom";
import { View, Edit } from "./pages";
import { makeStyles } from "@material-ui/styles";
import Appcontroller from "../../controller/appController";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const Interviews = props => {
  const classes = useStyles();
  let result = Appcontroller.loginChecker();
  !result ? props.history.push("/sign-in") : null;
  return (
    <div className={classes.root}>
      <Switch>
        <Route
          exact
          path="/interviews"
          component={props => <View {...props} />}
        />
        <Route
          exact
          path="/interviews/edit/:id"
          component={props => <Edit {...props} />}
        />
      </Switch>
    </div>
  );
};

export default Interviews;
