import React, { Component } from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import baseUrl from "../utils/baseUrl";
import AppBarHeader from "./AppBarHeader";
import ChipButton from "./ChipButton";

export class TranslatorView extends Component {
  state = {
    snackbaropen: false,
    snackbarmsg: "Please enter text to translate",
    appBarEnglish: "English to Pig Latin Translator",
    appBarPigLatin: "(Englishay otay Igpay Atinlay Anslatortray)",
    appBarPosition: "static",
    chipLabel: "Translation History",
  };

  snackbarClose = e => {
    this.setState({
      snackbaropen: false,
    });
  };

  getTranslation = e => {
    const { values, handleState } = this.props;
    const url = `${baseUrl}/terminologies`;
    axios
      .post(url, { english: values.english })
      .then(response => response.data)
      .then(data => {
        handleState(data.terminology.pig_latin);
      })
      .catch(error => {
        console.log("getting a translation error", error);
      });
    e.preventDefault();
  };

  render() {
    const { values, handleChange, componentDidMount, nextStep } = this.props;
    const functions = { componentDidMount, nextStep };
    const { appBarEnglish, appBarPigLatin, appBarPosition } = this.state;
    const settings = { appBarEnglish, appBarPigLatin, appBarPosition };
    return (
      <React.Fragment>
        <AppBarHeader settings={settings} />
        <Card style={styles.card}>
          <br />
          <ChipButton functions={functions} />
          <br />
          <form
            onSubmit={e => {
              if (values.english !== "") {
                this.getTranslation(e);
              } else {
                this.setState({ snackbaropen: true });
              }
              e.preventDefault();
            }}
          >
            <TextField
              label="Enter text"
              placeholder="e.g., risk assessment"
              margin="normal"
              style={styles.textField}
              onChange={handleChange("english")}
              defaultValue={values.english}
            />
            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={this.state.snackbaropen}
              autoHideDuration={2000}
              onClose={this.snackbarClose}
              message={<span>{this.state.snackbarmsg}</span>}
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
            <br />
            <CardContent>
              <Typography
                style={styles.title}
                color="textSecondary"
                gutterBottom
              >
                Pig Latin:
              </Typography>
              <Typography variant="h5" component="h2">
                {values.pigLatin}
              </Typography>
            </CardContent>
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
          </form>
        </Card>
      </React.Fragment>
    );
  }
}

const styles = {
  card: {
    width: 750,
    justify: "center",
  },
  title: {
    fontSize: 14,
  },
  button: {
    backgroundColor: "#ffe300",
    color: "#031121",
    width: 150,
  },
  textField: {
    width: 250,
  },
  appBar: {
    background: "#ffe300",
    padding: "20px",
  },
};

export default TranslatorView;
