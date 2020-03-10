import React, { Component } from "react";
import axios from "axios";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import MaterialTable from "material-table";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import baseUrl from "../utils/baseUrl";

export class DictionaryView extends Component {
  state = {
    snackbaropen: false,
    snackbarmsg:
      "Not translated! Either you left the field blank or the phrase is already in the history. Try searching for it.",
    columns: [
      { title: "English", field: "english" },
      { title: "Pig Latin", field: "pig_latin", editable: "never" },
    ],
  };

  snackbarClose = e => {
    this.setState({
      snackbaropen: false,
    });
  };

  handleDelete(id) {
    const url = `${baseUrl}/terminologies/${id}`;
    axios
      .delete(url)
      .then(response => {
        this.props.componentDidMount();
      })
      .catch(error => {
        console.log("delete error", error);
      });
  }

  handleEdit(id, data) {
    const url = `${baseUrl}/terminologies/${id}`;
    axios
      .put(url, {
        english: data.toLowerCase().replace(/[^a-z\s]/gi, ""),
      })
      .then(response => {
        this.props.componentDidMount();
      })
      .catch(error => {
        console.log("edit error", error);
      });
  }

  seeTranslator = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  allEnglishValues = () => {
    const { values } = this.props;
    let phrases = [];
    values.allTranslations.forEach(function(translation) {
      phrases.push(translation.english);
    });
    return phrases;
  };

  render() {
    const { values } = this.props;
    return (
      <React.Fragment>
        <Card style={styles.card}>
          <br />
          <Chip label="Translator" onClick={this.seeTranslator} clickable />
          <br />
          <CardContent>
            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={this.state.snackbaropen}
              autoHideDuration={5000}
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
            <MaterialTable
              localization={{
                body: {
                  emptyDataSourceMessage:
                    "No data: please translate something first.",
                },
                toolbar: {
                  searchTooltip: "Search",
                },
                pagination: {
                  labelDisplayedRows: "{from}-{to} of {count}",
                  firstTooltip: "First page",
                  previousTooltip: "Previous page",
                  nextTooltip: "Next page",
                  lastTooltip: "Last Page",
                },
              }}
              options={{
                pageSize: 5,
                pageSizeOptions: [5, 10, 20, 50],
              }}
              title="Translation history"
              columns={this.state.columns}
              data={values.allTranslations}
              editable={{
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    const listOfPhrases = this.allEnglishValues();
                    setTimeout(() => {
                      if (
                        newData.english !== "" &&
                        !listOfPhrases.includes(newData.english)
                      ) {
                        {
                          let data = values.allTranslations;
                          const index = data.indexOf(oldData);
                          const id = data[index].id;
                          data[index] = newData;
                          this.setState({ data });
                          this.handleEdit(id, newData.english, () => resolve());
                        }
                      } else {
                        this.setState({ snackbaropen: true });
                      }
                      resolve();
                    }, 1000);
                  }),
                onRowDelete: oldData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        let data = values.allTranslations;
                        const index = data.indexOf(oldData);
                        const id = data[index].id;
                        data.splice(index, 1);
                        this.handleDelete(id);
                        this.setState({ data }, () => resolve());
                      }
                      resolve();
                    }, 1000);
                  }),
              }}
            />
          </CardContent>
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
  appBar: {
    background: "#ffe300",
    padding: "20px",
  },
};

export default DictionaryView;
