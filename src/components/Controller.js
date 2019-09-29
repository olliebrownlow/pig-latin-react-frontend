import React, { Component } from 'react';
import TranslatorView from './TranslatorView';
//import DictionaryView from 'DictionaryView';

export class Controller extends Component {
  state = {
    step: 1,
    terminology: ""
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

  // handle fields change
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }

  render() {
    const { step } = this.state;
    const { terminology } = this.state;
    const value = { terminology }

    switch(step) {
      case 1:
      return (
        <TranslatorView
          handleChange={this.handleChange}
          nextStep={this.nextStep}
          value={value}
        />
      );
      case 2:
      return <h1>DictionaryView</h1>
    }
  }
}

export default Controller;
