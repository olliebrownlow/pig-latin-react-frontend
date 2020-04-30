import React, { Component } from "react";
import MaterialTable from "material-table";
import Grid from "@material-ui/core/Grid";
import SnackBarModal from "../SharedComponents/SnackBarModal";
import baseUrl from "../../utils/baseUrl";
import axios from "axios";

export class TranslatedPhraseHeader extends Component {
  constructor(props) {
    super(props);
    this.snackBarModalElement = React.createRef();
  }

  state = {
    snackbarmsg:
      "Not translated! Either you left the field blank or the phrase is already in the history. Try searching for it.",
    columns: [
      { title: "English", field: "english" },
      { title: "Pig Latin", field: "pig_latin", editable: "never" },
    ],
  };

  handleDelete(id) {
    const url = `${baseUrl}/terminologies/${id}`;
    axios
      .delete(url)
      .then((response) => {
        this.props.items.componentDidMount();
      })
      .catch((error) => {
        console.log("delete error", error);
      });
  }

  handleEdit(id, data) {
    const url = `${baseUrl}/terminologies/${id}`;
    axios
      .put(url, {
        english: data.toLowerCase().replace(/[^a-z\s]/gi, ""),
      })
      .then((response) => {
        this.props.items.componentDidMount();
      })
      .catch((error) => {
        console.log("edit error", error);
      });
  }

  allEnglishValues = () => {
    const { items } = this.props;
    let phrases = [];
    items.values.allTranslations.forEach(function (translation) {
      phrases.push(translation.english);
    });
    return phrases;
  };

  triggerSnackBarOpen = () => {
    this.snackBarModalElement.current.setFlag();
  };

  render() {
    const { snackbarmsg } = this.state;
    const snackbarmessage = { snackbarmsg };
    const { items } = this.props;
    return (
      <React.Fragment>
        <SnackBarModal
          snackbarmsg={snackbarmessage}
          ref={this.snackBarModalElement}
        />
        <Grid container justify="center">
          <Grid item xs={10}>
            <MaterialTable
              localization={{
                body: {
                  emptyDataSourceMessage:
                    "No data: please translate something first.",
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
                searchFieldStyle: {
                  // fontSize: "50px",
                },
              }}
              title="Translation history"
              columns={this.state.columns}
              data={items.values.allTranslations}
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
                          let data = items.values.allTranslations;
                          const index = data.indexOf(oldData);
                          const id = data[index].id;
                          data[index] = newData;
                          this.setState({ data });
                          this.handleEdit(id, newData.english, () => resolve());
                        }
                      } else {
                        this.triggerSnackBarOpen();
                      }
                      resolve();
                    }, 1000);
                  }),
                onRowDelete: (oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        let data = items.values.allTranslations;
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
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default TranslatedPhraseHeader;
