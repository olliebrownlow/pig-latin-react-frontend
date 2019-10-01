import React, { Component } from 'react';
import TranslatorView from './TranslatorView';
import DictionaryView from './DictionaryView';
import axios from 'axios';

export class Controller extends Component {
  state = {
    step: 1,
    pigLatin: "",
    english: "",
    allTranslations: null
  }

  //Handle field changes
  handleChange = input => e => {
    this.setState({[input]: (e.target.value).toLowerCase().replace(/[^a-z\s]/ig, "")});
  }

  //Handle state changes
  handleState = (data) => {
    this.setState({pigLatin: data});
  }

  // proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  componentDidMount = () => {
    axios.get("http://localhost:3001/terminologies")
    .then(response => response.data)
    .then((data) => {
      this.setState({allTranslations: data.translations});
    }).catch(error => {
      console.log('check error', error);
    });
  }

  render() {
    const { step } = this.state;
    const { pigLatin, english, allTranslations } = this.state;
    const values = { pigLatin, english, allTranslations };

    switch(step) {
      case 1:
      return (
        <TranslatorView
          nextStep={this.nextStep}
          values={values}
          handleChange={this.handleChange}
          handleState={this.handleState}
          componentDidMount={this.componentDidMount}
        />
      );
      case 2:
      return (
        <DictionaryView
          prevStep={this.prevStep}
          values={values}
          componentDidMount={this.componentDidMount}
        />
      );
    }
  }
}

export default Controller;
