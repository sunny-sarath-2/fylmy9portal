import React, { Component } from "react";
import Form from "../../../components/Form/Form";
import { Button } from "@material-ui/core";
import API from "../../../services/API";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      original: {
        movie: "",
        movie_cast: [],
        movie_cinematographer: "",
        movie_director: "",
        movie_editor: "",
        movie_music_director: "",
        movie_producer: "",
        movie_tags: [],
        review: "",
        review_created_date: "",
        status: "",
        title: "",
        image: "",
        _id: "",
        rating: 0
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
    let result = await API.updateReview(this.state.original);
    if (result.status == 200) {
      this.props.history.push("/reviews");
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
        formType: "string",
        fieldValue: this.state.original._id,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Id",
        fieldStateName: "_id"
      },
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
        fieldValue: this.state.original.review,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Review",
        fieldStateName: "review"
      },
      {
        formType: "text",
        fieldValue: this.state.original.movie,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Movie",
        fieldStateName: "movie"
      },
      {
        formType: "select",
        fieldValue: this.state.original.movie_cast,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Cast",
        fieldStateName: "movie_cast"
      },
      {
        formType: "text",
        fieldValue: this.state.original.movie_director,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Director",
        fieldStateName: "movie_director"
      },
      {
        formType: "text",
        fieldValue: this.state.original.movie_music_director,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Music Director",
        fieldStateName: "movie_music_director"
      },
      {
        formType: "text",
        fieldValue: this.state.original.movie_producer,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Producer",
        fieldStateName: "movie_producer"
      },
      {
        formType: "text",
        fieldValue: this.state.original.movie_editor,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Editor",
        fieldStateName: "movie_editor"
      },
      {
        formType: "text",
        fieldValue: this.state.original.movie_cinematographer,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Cinematographer",
        fieldStateName: "movie_cinematographer"
      },
      {
        formType: "select",
        fieldValue: this.state.original.movie_tags,
        fieldValueChange: this.fieldValueChange,
        fieldName: "tags",
        fieldStateName: "movie_tags"
      },
      {
        formType: "string",
        fieldValue: this.state.original.review_created_date,
        fieldValueChange: this.fieldValueChange,
        fieldName: "Created Date",
        fieldStateName: "review_created_date"
      },
      {
        formType: "range",
        fieldValue: this.state.original.rating,
        fieldValueChange: this.fieldValueChange,
        fieldName: "rating",
        fieldStateName: "rating"
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
