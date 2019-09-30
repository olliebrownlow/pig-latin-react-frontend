import React, { Component } from 'react';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

export class TranslatorView extends Component {

  seeAll = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  getTranslation = (e) => {
    const { values, handleState } = this.props;
    axios.post("http://localhost:3001/terminologies", { "english": values.english })
    .then(response => response.data)
    .then((data) => {
      console.log('data', data);
      handleState (data.terminology.pig_latin);
    }).catch(error => {
      console.log('check error', error);
    });
    e.preventDefault();
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <AppBar
          style={styles.appBar}
          position="static"
        >
          <Typography variant="h4">
            English to Pig Latin Translator
          </Typography>
          <Typography variant="h5">
            (Englishay otay Igpay Atinlay Anslatortray)
          </Typography>
        </AppBar>
        <br/>
        <br/>
        <Card style={styles.card} >
        <br/>
          <Chip
            label="Dictionary"
            onClick={this.seeAll}
            clickable
          />
          <br/>
          <form onSubmit={this.getTranslation}>
          <TextField
            label="Enter text"
            placeholder="e.g., risk assessment"
            margin="normal"
            style={styles.textField}
            onChange={handleChange('english')}
            defaultValue={values.english}
          />
          <br/>
          <CardContent>
            <Typography style={styles.title} color="textSecondary" gutterBottom>
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
    justify: 'center'
  },
  title: {
    fontSize: 14
  },
  button: {
    backgroundColor: '#ffe300',
    color: '#031121',
    width: 150
  },
  textField: {
    width: 250
  },
  appBar: {
    background: '#ffe300',
    padding: '20px'
  }
}

export default TranslatorView;
