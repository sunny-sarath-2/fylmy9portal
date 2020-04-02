import React from "react";
import PropTypes from "prop-types";
import EdiText from "react-editext";
import { Typography, Switch, TextField, Input } from "@material-ui/core";
import CreatableSelect from "react-select/creatable";
import BalloonEditor from "@ckeditor/ckeditor5-build-balloon-block";
import CKEditor from "@ckeditor/ckeditor5-react";
import FileBase64 from "react-file-base64";
import { uploadImage } from '../../common/common'

const Form = ({ fieldDetails }) => {
  if (fieldDetails) {
    const {
      formType,
      fieldValue,
      fieldValueChange,
      fieldName,
      fieldStateName
    } = fieldDetails;

    switch (formType) {
      case "text":
        return (
          <div>
            {/* <Typography variant="subtitle1">{fieldName}</Typography> */}
            {/* <EdiText
              type="text"
              buttonsAlign="before"
              inputProps={{
                style: {
                  width: "60%"
                }
              }}
              value={fieldValue}
              onSave={e => fieldValueChange(e, fieldStateName)}
            /> */}
            <TextField
              style={{
                width: "60%"
              }}
              id="standard-name"
              label={fieldName}
              value={fieldValue}
              onChange={e => {
                fieldValueChange(e.target.value, fieldStateName);
              }}
            />
          </div>
        );
        break;
      case "image":
        return (
          <div>
            <Typography variant="subtitle1">{fieldName}</Typography>
            <input type="file" accept="image/png, image/jpeg" onChange={e => {
                              console.log(e.target.files[0].name)
                              uploadImage(e.target.files[0], e.target.files[0].name,(data,error)=>{
                                console.log(data.location,error)
                                if(!!error)
                                return 0
                                else
                                fieldValueChange(data.location, fieldStateName);
                              }
                              )
            }}/>

            {fieldValue == "" ? null : (
              <img
                style={{ width: "600px", height: "300px" }}
                src={`${fieldValue}`}
              />
            )}
          </div>
        );
        break;
      case "select":
        let option = [];
        fieldValue.map(field => option.push({ value: field, label: field }));
        return (
          <div style={{ width: "68%" }}>
            <Typography variant="subtitle1">{fieldName}</Typography>
            <CreatableSelect
              isMulti
              onChange={e => {
                let data = [];
                e == null
                  ? (data = [])
                  : e.map(fields => data.push(fields.value));
                fieldValueChange(data, fieldStateName);
              }}
              value={option}
              options={option}
              closeMenuOnSelect={false}
            />
          </div>
        );
        break;
      case "switch":
        let convertToBool = true;
        typeof fieldValue != "boolean"
          ? fieldValue == "true"
            ? (convertToBool = true)
            : (convertToBool = false)
          : (convertToBool = fieldValue);
        return (
          <div>
            <Typography variant="subtitle1">{fieldName}</Typography>
            <Switch
              checked={convertToBool}
              onChange={e => {
                fieldValueChange(e.target.checked, fieldStateName);
              }}
            />
          </div>
        );
        break;
      case "wiziwig":
        return (
          <div>
            <Typography variant="subtitle1">{fieldName}</Typography>
            <CKEditor
              editor={BalloonEditor}
              data={fieldValue}
              onChange={(event, editor) => {
                const data = editor.getData();
                fieldValueChange(data, fieldStateName);
              }}
              onInit={editor => {
                const data = editor.getData();
                if (data != fieldValue) editor.setData(fieldValue);
              }}
              config={{
                placeholder: "start writing your review"
              }}
            />
          </div>
        );
        break;
      case "string":
        return (
          <div>
            <Typography variant="subtitle1">{fieldName}</Typography>
            <Typography variant="subtitle1">{fieldValue}</Typography>
          </div>
        );
        break;
      case "range":
        console.log(fieldValue, typeof fieldValue);
        return (
          <TextField
            style={{
              width: "60%"
            }}
            id="standard-name"
            type="number"
            label={fieldName}
            value={fieldValue}
            onChange={e => {
              fieldValueChange(e.target.value, fieldStateName);
            }}
          />
        );
        break;
      default:
        return null;
        break;
    }
  } else {
    return null;
  }
};

Form.propTypes = {
  fieldDetails: PropTypes.object
};
Form.defaultProps = {
  fieldDetails: {}
};

export default Form;
