import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

export class TranslatedPhraseHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <Typography
          data-testid="header"
          style={styles.title}
          color="textSecondary"
          gutterBottom
        >
          Pig Latin:
        </Typography>
      </React.Fragment>
    );
  }
}

const styles = {
  title: {
    fontSize: 14,
  },
};

export default TranslatedPhraseHeader;
