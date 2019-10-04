import React, { Component } from "react";
import Form from "../../../components/Form/Form";
import { Button, Typography } from "@material-ui/core";
import API from "../../../services/API";
import AppController from "../../../controller/appController";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      image: "",
      article: "",
      tags: [],
      status: true,
      error: false
    };
    this.fieldValueChange = this.fieldValueChange.bind(this);
    this.collectForm = this.collectForm.bind(this);
    this.createReview = this.createReview.bind(this);
  }
  fieldValueChange(e, fieldName) {
    this.setState({ [fieldName]: e });
  }
  async createReview() {
    let values = Object.values(this.state);
    let keys = Object.keys(this.state);
    let validationResult = AppController.commonVaidator(keys, values);
    console.log(validationResult);
    if (validationResult.status) {
      let result = await API.createArticle(this.state);
      this.props.history.push("/article");
      console.log(result);
    } else {
      this.setState({ error: true });
      let timeout = setTimeout(() => {
        this.setState({ error: false });
        clearTimeout(timeout);
      }, 3000);
    }
  }
  render() {
    const formData = this.collectForm();
    const { error } = this.state;
    return (
      <div style={{ background: "#fff", padding: "15px" }}>
        {formData.length == 0
          ? null
          : formData.map((element, key) => {
              return (
                <div key={key} style={{ width: "100%", margin: "15px" }}>
                  <Form fieldDetails={element} key={key} />
                </div>
              );
            })}
        {error ? (
          <Typography variant="h6" className={"error-test"}>
            fill all the fields
          </Typography>
        ) : null}
        <Button variant="outlined" color="primary" onClick={this.createReview}>
          Create
        </Button>
      </div>
    );
  }
  collectForm() {
    let data = [
      {
        formType: "text",
        fieldValue: this.state.title,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Title",
        fieldStateName: "title"
      },
      {
        formType: "image",
        fieldValue: this.state.image,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Image",
        fieldStateName: "image"
      },
      {
        formType: "wiziwig",
        fieldValue: this.state.article,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Article",
        fieldStateName: "article"
      },
      {
        formType: "select",
        fieldValue: this.state.tags,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Tags",
        fieldStateName: "tags"
      },
      {
        formType: "switch",
        fieldValue: this.state.status,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Status",
        fieldStateName: "status"
      }
    ];
    return data;
  }
}

export default Create;
