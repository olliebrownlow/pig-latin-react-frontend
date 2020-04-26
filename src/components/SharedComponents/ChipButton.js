import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";

export class ChipButton extends Component {
  seeTranslationHistory = (e) => {
    e.preventDefault();
    this.props.functions.nextStep();
  };

  seeTranslator = (e) => {
    e.preventDefault();
    this.props.functions.prevStep();
  };

  render() {
    const { chipValue } = this.props;
    return (
      <React.Fragment>
        <Grid container justify="flex-end">
          <Grid item>
            <Chip
              data-testid="button"
              label={chipValue.chipLabel}
              onClick={(e) => {
                if (chipValue.chipLabel === "Translation History") {
                  this.seeTranslationHistory(e);
                  this.props.functions.componentDidMount();
                } else {
                  this.seeTranslator(e);
                }
              }}
              clickable
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default ChipButton;
