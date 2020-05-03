import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import TextField from "@material-ui/core/TextField";

export class TranslateTextField extends Component {
  render() {
    const { submitFormFunctions } = this.props;
    return (
      <React.Fragment>
        <Grid container justify="center">
          <Grid item xs={8}>
            <TextField
              data-testid="textField"
              inputProps={{ "data-testid": "textToTranslate" }}
              label="Enter text"
              placeholder="e.g., risk assessment"
              margin="normal"
              onChange={submitFormFunctions.handleChange}
              value={submitFormFunctions.values.english}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default TranslateTextField;
