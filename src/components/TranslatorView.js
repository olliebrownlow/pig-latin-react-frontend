import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import AppBarHeader from "./SharedComponents/AppBarHeader";
import ChipButton from "./SharedComponents/ChipButton";
import SubmitForm from "./TranslatorViewComponents/SubmitForm";

export class TranslatorView extends Component {
  state = {
    appBarEnglish: "English to Pig Latin Translator",
    appBarPigLatin: "(Englishay otay Igpay Atinlay Anslatortray)",
    appBarPosition: "static",
    chipLabel: "Translation History",
  };

  render() {
    const {
      values,
      handleChange,
      handleState,
      componentDidMount,
      nextStep,
    } = this.props;
    const functions = { componentDidMount, nextStep };
    const submitFormFunctions = { values, handleChange, handleState };
    const {
      appBarEnglish,
      appBarPigLatin,
      appBarPosition,
      chipLabel,
    } = this.state;
    const appBarHeaderSettings = {
      appBarEnglish,
      appBarPigLatin,
      appBarPosition,
    };
    const chipValue = { chipLabel };
    return (
      <React.Fragment>
        <AppBarHeader settings={appBarHeaderSettings} />
        <Grid container justify="center">
          <Grid item xs={6}>
            <Card data-testid="cardElement">
              <br />
              <ChipButton functions={functions} chipValue={chipValue} />
              <br />
              <SubmitForm submitFormFunctions={submitFormFunctions} />
            </Card>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default TranslatorView;
