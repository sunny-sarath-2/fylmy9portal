import React, { Component, useState } from "react";
import { Table } from "../../../components/Table";
import { TableStructure } from "../components";
import API from "../../../services/API";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsData: []
    };
  }
  async componentDidMount() {
    let reviewData = await API.getAllReviews();
    console.log(reviewData);
    this.setState({ reviewsData: reviewData.result });
  }
  render() {
    const structure = TableStructure(this.props);
    const { reviewsData } = this.state;
    return <Table columns={structure} data={reviewsData} {...this.props} />;
  }
}

export default View;
