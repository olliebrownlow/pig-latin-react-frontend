import React, { Component } from "react";
import TranslatorView from "./TranslatorView";
import DictionaryView from "./DictionaryView";
import baseUrl from "../utils/baseUrl";
import axios from "axios";
import TranslatorViewAppBar from "./TranslatorViewAppBar";
import DictionaryViewAppBar from "./DictionaryViewAppBar";

export class Controller extends Component {
  state = {
    step: 1,
    pigLatin: "",
    english: "",
    allTranslations: null,
  };

  //Handle field changes
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value.toLowerCase().replace(/[^a-z\s]/gi, ""),
    });
  };

  //Handle state changes
  handleState = data => {
    this.setState({ pigLatin: data });
  };

  // proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  componentDidMount = () => {
    const url = `${baseUrl}/terminologies`;
    axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({ allTranslations: data.translations });
      })
      .catch(error => {
        console.log("getting all translations error", error);
      });
  };

  render() {
    const { step } = this.state;
    const { pigLatin, english, allTranslations } = this.state;
    const values = { pigLatin, english, allTranslations };

    switch (step) {
      case 1:
        return (
          <React.Fragment>
            <TranslatorViewAppBar />
            <TranslatorView
              nextStep={this.nextStep}
              values={values}
              handleChange={this.handleChange}
              handleState={this.handleState}
              componentDidMount={this.componentDidMount}
            />
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <DictionaryViewAppBar />
            <DictionaryView
              prevStep={this.prevStep}
              values={values}
              componentDidMount={this.componentDidMount}
            />
          </React.Fragment>
        );
    }
  }
}

export default Controller;
