import React, { Component } from "react";
import Form from "../../../components/Form/Form";
import { Button } from "@material-ui/core";
import API from "../../../services/API";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      original: {
        title: "",
        image: "",
        article: "",
        tags: [],
        status: true,
        _id: ""
      },
      index: 0
    };
    this.fieldValueChange = this.fieldValueChange.bind(this);
    this.collectForm = this.collectForm.bind(this);
    this.updateData = this.updateData.bind(this);
  }
  componentDidMount() {
    this.setState({
      original: this.props.location.state.original,
      index: this.props.location.state.index
    });
  }
  fieldValueChange(e, fieldName) {
    let duplicateState = this.state.original;
    duplicateState[fieldName] = e;
    this.setState({ original: duplicateState });
  }
  async updateData() {
    let result = await API.updateArticle(this.state.original);
    if (result.status == 200) {
      this.props.history.push("/article");
    }
  }
  render() {
    const formData = this.collectForm();
    const {} = this.state;
    console.log(this.state);
    //noValidate autoComplete="off"
    return (
      <div style={{ background: "#fff", padding: "15px" }}>
        {/* <h1>{this.state.test}</h1> */}
        {formData.length == 0
          ? null
          : formData.map((element, key) => {
              return (
                <div key={key} style={{ width: "100%", margin: "15px" }}>
                  <Form fieldDetails={element} key={key} />
                </div>
              );
            })}
        <Button variant="outlined" color="primary" onClick={this.updateData}>
          Update
        </Button>
      </div>
    );
  }
  collectForm() {
    let data = [
      {
        formType: "text",
        fieldValue: this.state.original.title,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Title",
        fieldStateName: "title"
      },
      {
        formType: "image",
        fieldValue: this.state.original.image,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Image",
        fieldStateName: "image"
      },
      {
        formType: "wiziwig",
        fieldValue: this.state.original.article,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Article",
        fieldStateName: "article"
      },
      {
        formType: "select",
        fieldValue: this.state.original.tags,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Tags",
        fieldStateName: "tags"
      },
      {
        formType: "switch",
        fieldValue: this.state.original.status,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Status",
        fieldStateName: "status"
      }
    ];
    return data;
  }
}

export default Edit;
