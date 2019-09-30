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
  }
  async componentDidMount() {
    let reviewData = await API.getAllReviews();
    this.setState({ reviewsData: reviewData.result });
  }
  createReview() {
    console.log(this.props);
    this.props.history.push("/reviews/create");
  }
  render() {
    const structure = TableStructure(this.props);
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
