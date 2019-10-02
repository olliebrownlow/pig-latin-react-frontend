import React, { Component } from 'react';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import MaterialTable from 'material-table';

export class DictionaryView extends Component {
  state = {
    columns: [
      { title: 'English', field: 'english' },
      { title: 'Pig Latin', field: 'pig_latin', editable: 'never' }
    ]
  }

  handleDelete(id) {
    axios.delete(`http://localhost:3001/terminologies/${id}`)
    .then(response => {
      this.props.componentDidMount();
    }).catch(error => {
      console.log('logout error', error);
    });
  }

  handleEdit(id, data) {
    axios.put(`http://localhost:3001/terminologies/${id}`, { "english": data.toLowerCase().replace(/[^a-z\s]/ig, "") })
    .then(response => {
      this.props.componentDidMount();
    }).catch(error => {
      console.log('logout error', error);
    });
  }

  seeTranslator = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values } = this.props;
    return (
      <React.Fragment>
        <AppBar
          style={styles.appBar}
          position="sticky"
        >
          <Typography variant="h4">
            English/Pig Latin Translations
          </Typography>
          <Typography variant="h6">
            (Englishay/Igpay Atinlay anslationstray)
          </Typography>
          <Typography variant="h6">
            For the Health & Safety Industry
          </Typography>
        </AppBar>
        <br/>
        <br/>
        <Card style={styles.card} >
        <br/>
          <Chip
            label="Translator"
            onClick={this.seeTranslator}
            clickable
          />
          <br/>
          <CardContent>

          <MaterialTable
            localization={{
               body: {
                 emptyDataSourceMessage: 'No data: please translate something first.'
               },
               toolbar: {
                 searchTooltip: 'Search'
               },
               pagination: {
                 labelDisplayedRows: '{from}-{to} of {count}',
                 firstTooltip: 'First page',
                 previousTooltip: 'Previous page',
                 nextTooltip: 'Next page',
                 lastTooltip: 'Last Page'
               }
             }}
             options={{
               pageSize: 5,
               pageSizeOptions: [5, 10, 20, 50]
             }}
            title="Translation history"
            columns={this.state.columns}
            data={values.allTranslations}
              editable={{
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        let data = values.allTranslations;
                        const index = data.indexOf(oldData);
                        const id = data[index].id
                        data[index] = newData;
                        this.setState({ data });
                        this.handleEdit(id, newData.english, () => resolve());
                      }
                      resolve()
                    }, 1000)
                  }),
                onRowDelete: oldData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        let data = values.allTranslations;
                        const index = data.indexOf(oldData);
                        const id = data[index].id
                        data.splice(index, 1);
                        this.handleDelete(id);
                        this.setState({ data }, () => resolve());
                      }
                    resolve()
                  }, 1000)
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
    justify: 'center'
  },
  appBar: {
    background: '#ffe300',
    padding: '20px'
  }
}

export default DictionaryView;
