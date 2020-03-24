import React, { Component } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";

export class SnackBarModal extends Component {
  state = {
    snackbaropen: false,
  };

  //called from the parent component (SubmitForm)
  setFlag = () => {
    this.setState({
      snackbaropen: true,
    });
  };

  snackbarClose = e => {
    this.setState({
      snackbaropen: false,
    });
  };

  render() {
    const { snackbarmsg } = this.props;
    return (
      <React.Fragment>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={this.state.snackbaropen}
          autoHideDuration={4000}
          onClose={this.snackbarClose}
          message={<span>{snackbarmsg.snackbarmsg}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              onClick={this.snackbarClose}
            >
              x
            </IconButton>,
          ]}
        />
      </React.Fragment>
    );
  }
}

export default SnackBarModal;
