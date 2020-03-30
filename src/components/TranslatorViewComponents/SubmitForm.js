import React, { Component } from "react";
import axios from "axios";
import CardContent from "@material-ui/core/CardContent";
import baseUrl from "../../utils/baseUrl";
import SnackBarModal from "../SharedComponents/SnackBarModal";
import SubmitButton from "./SubmitFormComponents/SubmitButton";
import TranslateTextField from "./SubmitFormComponents/TranslateTextfield";
import TranslatedPhraseHeader from "./SubmitFormComponents/TranslatedPhraseHeader";
import TranslatedPhrasePigLatin from "./SubmitFormComponents/TranslatedPhrasePigLatin";

export class SubmitForm extends Component {
  constructor(props) {
    super(props);
    this.snackBarModalElement = React.createRef();
  }

  state = {
    snackbarmsg: "Please enter text to translate",
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

  triggerSnackBarOpen = () => {
    this.snackBarModalElement.current.setFlag();
  };

  render() {
    const { submitFormFunctions } = this.props;
    const { snackbarmsg } = this.state;
    const snackbarmessage = { snackbarmsg };
    return (
      <React.Fragment>
        <form
          data-testid="submitForm"
          onSubmit={e => {
            if (submitFormFunctions.values.english !== "") {
              this.getTranslation(e);
            } else {
              this.triggerSnackBarOpen();
            }
            e.preventDefault();
          }}
        >
          <TranslateTextField submitFormFunctions={submitFormFunctions} />
          <SnackBarModal
            snackbarmsg={snackbarmessage}
            ref={this.snackBarModalElement}
          />
          <br />
          <CardContent>
            <TranslatedPhraseHeader />
            <TranslatedPhrasePigLatin
              submitFormFunctions={submitFormFunctions}
            />
          </CardContent>
          <SubmitButton />
        </form>
      </React.Fragment>
    );
  }
}

export default SubmitForm;
