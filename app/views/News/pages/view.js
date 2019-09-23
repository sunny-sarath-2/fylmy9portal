import React, { Component, useState } from "react";
import { Table } from "../../../components/Table";
import { TableStructure } from "../components";
import API from "../../../services/API";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: []
    };
  }
  async componentDidMount() {
    let result = await API.test();
    this.setState({ newsData: result.data });
    console.log(result);
  }
  render() {
    const structure = TableStructure(this.props);
    const { newsData } = this.state;
    return <Table columns={structure} data={newsData} {...this.props} />;
  }
}

export default View;
