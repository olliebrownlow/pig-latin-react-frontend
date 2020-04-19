import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AppBarHeader from "./SharedComponents/AppBarHeader";
import ChipButton from "./SharedComponents/ChipButton";
import TableOfTranslations from "./DictionaryViewComponents/TableOfTranslations";

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
        <Card data-testid="cardElement" style={styles.card}>
          <br />
          <ChipButton
            data-testid="chipButtonElement"
            functions={functions}
            chipValue={chipValue}
          />
          <br />
          <CardContent data-testid="cardContentElement">
            <TableOfTranslations
              data-testid="tableOfTranslationsElement"
              items={items}
            />
          </CardContent>
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

export default DictionaryView;
