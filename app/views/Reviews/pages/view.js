import React, { Component, useState } from "react";
import { Table } from "../../../components/Table";
import { TableStructure } from "../components";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const structure = TableStructure(this.props);
    return <Table columns={structure} {...this.props} />;
  }
}

export default View;
