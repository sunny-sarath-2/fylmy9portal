import React, { Component } from "react";
import FormCreater from "../../components/FormCreater/FormCreater";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
import ViewDevices from "./ViewDevices";
import { Button } from "@material-ui/core";

class Devices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AddDevices: false
    };
  }
  render() {
    const { classes } = this.props;
    console.log(this.props.classes);
    return (
      <Card>
        <CardHeader color="danger">
          <h4>Devices</h4>
          {this.state.AddDevices ? (
            <Button
              onClick={() => {
                this.setState({ AddDevices: false });
              }}
              style={{ backgroundColor: "#f9f9f9", float: "right" }}
            >
              Go Back
            </Button>
          ) : (
            <Button
              onClick={() => {
                this.setState({ AddDevices: true });
              }}
              style={{ backgroundColor: "#f9f9f9", float: "right" }}
            >
              Add Device
            </Button>
          )}
        </CardHeader>
        <CardBody>
          {this.state.AddDevices ? (
            <FormCreater
              classes={classes}
              fields={[
                ["TextField", "check"],
                ["TextField", "check"],
                ["TextField", "check"]
              ]}
              data={{ check: "" }}
            />
          ) : (
            <ViewDevices />
          )}
          {/* <CustomTable /> */}
        </CardBody>
      </Card>
    );
  }
}
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};
export default withStyles(styles)(Devices);
