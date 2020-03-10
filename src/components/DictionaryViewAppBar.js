import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

export class DictionaryViewAppBar extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar style={styles.appBar} position="sticky">
          <Typography variant="h4">English/Pig Latin Translations</Typography>
          <Typography variant="h6">
            (Englishay/Igpay Atinlay anslationstray)
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

export default DictionaryViewAppBar;
