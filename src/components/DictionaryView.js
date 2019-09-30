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
        { title: 'Pig Latin', field: 'pig_latin', initialEditValue: 'initial edit value' },
      ]
      // ,
      // data: [
      //   { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      //   { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
      // ]
  }

  seeTranslator = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values } = this.props;
    console.log(values.info)
    return (
      <React.Fragment>
        <AppBar
          style={styles.appBar}
          position="sticky"
        >
          <Typography variant="h4">
            English/Pig Latin Dictionary
          </Typography>
          <Typography variant="h5">
            (Englishay/Igpay Atinlay Ictionaryday)
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
              title="Dictionary"
              columns={this.state.columns}
              data={values.info}
              editable={{
                onRowAdd: newData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        const data = values.info;
                        data.push(newData);
                        this.setState({ data }, () => resolve());
                      }
                      resolve()
                    }, 1000)
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        const data = values.info;
                        const index = data.indexOf(oldData);
                        data[index] = newData;
                        this.setState({ data }, () => resolve());
                      }
                      resolve()
                    }, 1000)
                  }),
                onRowDelete: oldData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        let data = values.info;
                        const index = data.indexOf(oldData);
                        data.splice(index, 1);
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
