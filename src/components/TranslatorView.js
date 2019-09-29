import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export class TranslatorView extends Component {

  seeAll = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    return (
      <React.Fragment>
      <AppBar
        style={styles.appBar}
        position="static"
      >
        <Typography variant="h4">
          English to Pig Latin Translator
        </Typography>
      </AppBar>
      <br/>
        <Button
          variant="contained"
          onClick={this.seeAll}
          style={styles.button}
        >
          See All
        </Button>
      </React.Fragment>
    );
  }
}

const styles = {
  button: {
    backgroundColor: '#ff3399',
    color: '#ffffff',
    margin: 15,
    width: 150
  },
  textField: {
    marginLeft: 15,
    marginRight: 15,
    width: 250
  },
  appBar: {
    background: '#ff3399',
    padding: '20px'
  }
}

export default TranslatorView;
