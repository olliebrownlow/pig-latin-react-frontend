import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

export class TranslatorViewAppBar extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar style={styles.appBar} position="static">
          <Typography variant="h4">English to Pig Latin Translator</Typography>
          <Typography variant="h6">
            (Englishay otay Igpay Atinlay Anslatortray)
          </Typography>
        </AppBar>
        <br />
        <br />
      </React.Fragment>
    );
  }
}

const styles = {
  appBar: {
    background: "#ffe300",
    padding: "20px",
  },
};

export default TranslatorViewAppBar;
