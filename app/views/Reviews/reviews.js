import React from "react";
import { Switch, Route } from "react-router-dom";
import { View, Edit, Create } from "./pages";
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

const Reviews = props => {
  const classes = useStyles();
  let result = Appcontroller.loginChecker();
  !result ? props.history.push("/sign-in") : null;
  return (
    <div className={classes.root}>
      <Switch>
        <Route exact path="/reviews" component={props => <View {...props} />} />
        <Route
          exact
          path="/reviews/edit/:id"
          component={props => <Edit {...props} />}
        />
        <Route
          exact
          path="/reviews/create"
          component={props => <Create {...props} />}
        />
      </Switch>
    </div>
  );
};

export default Reviews;
