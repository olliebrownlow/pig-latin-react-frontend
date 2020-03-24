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
          <TranslateTextField submitFormFunctions={submitFormFunctions} />
          <SnackBarModal ref={this.snackBarModalElement} />
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
