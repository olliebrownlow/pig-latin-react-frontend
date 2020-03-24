import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

export class TranslatedPhrasePigLatin extends Component {
  render() {
    const { submitFormFunctions } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h5" component="h2">
          {submitFormFunctions.values.pigLatin}
        </Typography>
      </React.Fragment>
    );
  }
}

export default TranslatedPhrasePigLatin;
