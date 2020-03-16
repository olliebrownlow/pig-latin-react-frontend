import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";

export class ChipButton extends Component {
  seeTranslationHistory = e => {
    e.preventDefault();
    this.props.functions.nextStep();
  };

  render() {
    return (
      <React.Fragment>
        <Chip
          label="Translation History"
          onClick={e => {
            this.seeTranslationHistory(e);
            this.props.functions.componentDidMount();
          }}
          clickable
        />
      </React.Fragment>
    );
  }
}

export default ChipButton;
