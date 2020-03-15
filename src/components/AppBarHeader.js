import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

export class AppBarHeader extends Component {
  render() {
    const { settings } = this.props;
    return (
      <React.Fragment>
        <AppBar style={styles.appBar} position={settings.appBarPosition}>
          <Typography variant="h4">{settings.appBarEnglish}</Typography>
          <Typography variant="h6">{settings.appBarPigLatin}</Typography>
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

export default AppBarHeader;
