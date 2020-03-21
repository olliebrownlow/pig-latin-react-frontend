import React, { Component } from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import baseUrl from "../utils/baseUrl";
import SnackBarModal from "./SnackBarModal";
import SubmitButton from "./SubmitButton";

export class SubmitForm extends Component {
  constructor(props) {
    super(props);
    this.snackBarModalElement = React.createRef();
  }

  state = {
    snackbaropen: false,
    snackbarmsg: "Please enter text to translate",
  };

  snackbarClose = e => {
    this.setState({
      snackbaropen: false,
    });
  };

  getTranslation = e => {
    const { submitFormFunctions } = this.props;
    const url = `${baseUrl}/terminologies`;
    axios
      .post(url, { english: submitFormFunctions.values.english })
      .then(response => response.data)
      .then(data => {
        submitFormFunctions.handleState(data.terminology.pig_latin);
      })
      .catch(error => {
        console.log("getting a translation error", error);
      });
    e.preventDefault();
  };

  handleEmptySubmit = () => {
    this.snackBarModalElement.current.setFlag();
  };

  render() {
    const { submitFormFunctions } = this.props;
    return (
      <React.Fragment>
        <form
          onSubmit={e => {
            if (submitFormFunctions.values.english !== "") {
              this.getTranslation(e);
            } else {
              this.handleEmptySubmit();
            }
            e.preventDefault();
          }}
        >
          <TextField
            label="Enter text"
            placeholder="e.g., risk assessment"
            margin="normal"
            style={styles.textField}
            onChange={submitFormFunctions.handleChange("english")}
            defaultValue={submitFormFunctions.values.english}
          />
          <SnackBarModal ref={this.snackBarModalElement} />
          <br />
          <CardContent>
            <Typography style={styles.title} color="textSecondary" gutterBottom>
              Pig Latin:
            </Typography>
            <Typography variant="h5" component="h2">
              {submitFormFunctions.values.pigLatin}
            </Typography>
          </CardContent>
          <SubmitButton />
        </form>
      </React.Fragment>
    );
  }
}

const styles = {
  title: {
    fontSize: 14,
  },
  textField: {
    width: 250,
  },
};

export default SubmitForm;
