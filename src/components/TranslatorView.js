import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import AppBarHeader from "./AppBarHeader";
import ChipButton from "./ChipButton";
import SubmitForm from "./SubmitForm";

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
        <Card style={styles.card}>
          <br />
          <ChipButton functions={functions} chipValue={chipValue} />
          <br />
          <SubmitForm submitFormFunctions={submitFormFunctions} />
        </Card>
      </React.Fragment>
    );
  }
}

const styles = {
  card: {
    width: 750,
    justify: "center",
  },
};

export default TranslatorView;
