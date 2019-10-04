import React, { Component, useState } from "react";
import { Table } from "../../../components/Table";
import { TableStructure } from "../components";
import API from "../../../services/API";
import { Button } from "@material-ui/core";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleData: []
    };
    this.createReview = this.createReview.bind(this);
    this.deleteReview = this.deleteReview.bind(this);
  }
  async componentDidMount() {
    let articlesData = await API.getAllArticles();
    console.log(articlesData);
    this.setState({ articleData: articlesData.test });
  }
  createReview() {
    this.props.history.push("/article/create");
  }
  async deleteReview(id) {
    if (confirm("delete row")) {
      let result = await API.deleteArticle(id);
      if (result.status == 200) alert("successfully deleted review");
    }
  }
  render() {
    const structure = TableStructure(this.props, this.deleteReview);
    const { articleData } = this.state;
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
        <Table columns={structure} data={articleData} {...this.props} />
      </div>
    );
  }
}

export default View;
