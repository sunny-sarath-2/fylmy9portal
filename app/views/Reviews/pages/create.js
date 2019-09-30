import React, { Component } from "react";
import Form from "../../../components/Form/Form";
import { Button, Typography } from "@material-ui/core";
import API from "../../../services/API";
import AppController from "../../../controller/appController";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: "",
      movie_cast: [],
      movie_cinematographer: "",
      movie_director: "",
      movie_editor: "",
      movie_music_director: "",
      movie_producer: "",
      movie_tags: [],
      review: "",
      status: true,
      title: "",
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
      let result = await API.createReview(this.state);
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
        formType: "wiziwig",
        fieldValue: this.state.review,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Review",
        fieldStateName: "review"
      },
      {
        formType: "text",
        fieldValue: this.state.movie,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Movie",
        fieldStateName: "movie"
      },
      {
        formType: "select",
        fieldValue: this.state.movie_cast,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Cast",
        fieldStateName: "movie_cast"
      },
      {
        formType: "text",
        fieldValue: this.state.movie_director,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Director",
        fieldStateName: "movie_director"
      },
      {
        formType: "text",
        fieldValue: this.state.movie_music_director,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Music Director",
        fieldStateName: "movie_music_director"
      },
      {
        formType: "text",
        fieldValue: this.state.movie_producer,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Producer",
        fieldStateName: "movie_producer"
      },
      {
        formType: "text",
        fieldValue: this.state.movie_editor,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Editor",
        fieldStateName: "movie_editor"
      },
      {
        formType: "text",
        fieldValue: this.state.movie_cinematographer,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Cinematographer",
        fieldStateName: "movie_cinematographer"
      },
      {
        formType: "select",
        fieldValue: this.state.movie_tags,
        fieldValueChange: this.fieldValueChange,
        fieldName: "tags",
        fieldStateName: "movie_tags"
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
