import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AppBarHeader from "./SharedComponents/AppBarHeader";
import ChipButton from "./SharedComponents/ChipButton";
import TableOfTranslations from "./DictionaryViewComponents/TableOfTranslations";
import Grid from "@material-ui/core/Grid";

export class DictionaryView extends Component {
  state = {
    appBarEnglish: "English/Pig Latin Translations",
    appBarPigLatin: "(Englishay/Igpay Atinlay anslationstray)",
    appBarPosition: "sticky",
    chipLabel: "Translator",
  };

  render() {
    const { values, prevStep, componentDidMount } = this.props;
    const functions = { prevStep };
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
    const items = { values, componentDidMount };
    return (
      <React.Fragment>
        <AppBarHeader
          data-testid="appBarHeaderElement"
          settings={appBarHeaderSettings}
        />
        <Grid container justify="center">
          <Grid item xs={8}>
            <Card data-testid="cardElement">
              <br />
              <ChipButton
                data-testid="chipButtonElement"
                functions={functions}
                chipValue={chipValue}
              />
              <br />
              <TableOfTranslations
                data-testid="tableOfTranslationsElement"
                items={items}
              />
            </Card>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default DictionaryView;
