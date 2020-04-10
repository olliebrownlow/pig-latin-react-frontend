import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

export class TranslateTextField extends Component {
  render() {
    const { submitFormFunctions } = this.props;
    return (
      <React.Fragment>
        <TextField
          inputProps={{ "data-testid": "textToTranslate" }}
          label="Enter text"
          placeholder="e.g., risk assessment"
          margin="normal"
          style={styles.textField}
          onChange={submitFormFunctions.handleChange}
          value={submitFormFunctions.values.english}
        />
      </React.Fragment>
    );
  }
}

const styles = {
  textField: {
    width: 350,
  },
};

export default TranslateTextField;
