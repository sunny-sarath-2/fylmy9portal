import React, { Component, useState } from "react";
import { Table } from "../../../components/Table";
import { TableStructure } from "../components";
import API from "../../../services/API";
import { Button } from "@material-ui/core";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsData: []
    };
    this.createReview = this.createReview.bind(this);
    this.deleteReview = this.deleteReview.bind(this);
  }
  async componentDidMount() {
    let reviewData = await API.getAllReviews();
    this.setState({ reviewsData: reviewData.result });
  }
  createReview() {
    this.props.history.push("/reviews/create");
  }
  async deleteReview(id) {
    if (confirm("delete row")) {
      let result = await API.deleteReview(id);
      if (result.status == 200) alert("successfully deleted review");
    }
  }
  render() {
    const structure = TableStructure(this.props, this.deleteReview);
    const { reviewsData } = this.state;
    return (
      <div>
        <Button
          className={"float-right mrb-1"}
          variant="outlined"
          color="primary"
          onClick={this.createReview}
        >
          Create
        </Button>
        <Table columns={structure} data={reviewsData} {...this.props} />
      </div>
    );
  }
}

export default View;
