import React, { Component } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";

const TIMEOUT = 4000;

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

  snackbarClose = (e) => {
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
          data-testid="modal"
          open={this.state.snackbaropen}
          autoHideDuration={TIMEOUT}
          onClose={this.snackbarClose}
          message={<span>{snackbarmsg.snackbarmsg}</span>}
          action={[
            <IconButton
              key="close"
              data-testid="modalCloseButton"
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
