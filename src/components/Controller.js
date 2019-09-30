import React, { Component } from 'react';
import TranslatorView from './TranslatorView';
//import DictionaryView from './DictionaryView';

export class Controller extends Component {
  state = {
    step: 1,
    pigLatin: "",
    english: ""
  }

  //Handle field changes
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
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

  render() {
    const { step } = this.state;
    const { pigLatin, english } = this.state;
    const values = { pigLatin, english };

    switch(step) {
      case 1:
      return (
        <TranslatorView
          nextStep={this.nextStep}
          values={values}
          handleChange={this.handleChange}
          handleState={this.handleState}
        />
      );
      case 2:
      return <h1>DictionaryView</h1>
      // return (
      //   <DictionaryView
      //     prevStep={this.nextStep}
      //     values={values}
      //   />
      // );
    }
  }
}

export default Controller;
