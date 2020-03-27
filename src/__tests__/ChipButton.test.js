import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChipButton from "../components/SharedComponents/ChipButton";

describe("The ChipButton", () => {
  // let chipValue;
  // let functions;
  // let getByTestId;

  beforeEach(() => {
    // functions = jest.fn();
    // chipValue = {
    //   chipLabel: "Button text",
    // };
    // ({ getByTestId } = render(
    //   <ChipButton functions={functions} chipValue={chipValue} />,
    // ));
  });

  afterEach(cleanup);

  it("shows the right text", () => {
    const functions = jest.fn();

    const chipValue = {
      chipLabel: "Button text",
    };

    const { getByTestId } = render(
      <ChipButton functions={functions} chipValue={chipValue} />,
    );

    expect(getByTestId("button").textContent).toEqual(chipValue.chipLabel);
  });

  it("calls the right functions received from the TranslatorView component", () => {
    const functions = {
      componentDidMount: jest.fn(),
      nextStep: jest.fn(),
      prevStep: jest.fn(),
    };

    const chipValue = {
      chipLabel: "Translation History",
    };

    const { getByTestId } = render(
      <ChipButton functions={functions} chipValue={chipValue} />,
    );

    fireEvent.click(getByTestId("button"));

    expect(functions.componentDidMount).toHaveBeenCalledTimes(1);
    expect(functions.nextStep).toHaveBeenCalledTimes(1);
    expect(functions.prevStep).toHaveBeenCalledTimes(0);
  });

  it("calls the right functions received from the DictionaryView component", () => {
    // const seeTranslator = jest.fn();
    const functions = {
      componentDidMount: jest.fn(),
      nextStep: jest.fn(),
      prevStep: jest.fn(),
    };

    const chipValue = {
      chipLabel: "Translator",
    };

    const { getByTestId } = render(
      <ChipButton functions={functions} chipValue={chipValue} />,
    );

    fireEvent.click(getByTestId("button"));

    expect(functions.componentDidMount).toHaveBeenCalledTimes(0);
    expect(functions.nextStep).toHaveBeenCalledTimes(0);
    expect(functions.prevStep).toHaveBeenCalledTimes(1);
    // expect(seeTranslator).toHaveBeenCalledTimes(1);
  });
});
