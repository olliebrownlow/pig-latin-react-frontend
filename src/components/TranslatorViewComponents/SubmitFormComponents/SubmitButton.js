import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

export class SubmitButton extends Component {
  render() {
    return (
      <React.Fragment>
        <CardActions>
          <Button
            type="submit"
            size="small"
            variant="contained"
            style={styles.button}
            data-testid="translateButton"
          >
            Submit
          </Button>
        </CardActions>
      </React.Fragment>
    );
  }
}

const styles = {
  button: {
    backgroundColor: "#ffe300",
    color: "#031121",
    width: 150,
  },
};

export default SubmitButton;
