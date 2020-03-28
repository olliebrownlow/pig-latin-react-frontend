import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChipButton from "../components/SharedComponents/ChipButton";

describe("The ChipButton", () => {
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
    expect(functions.prevStep).not.toBeCalled;
  });

  it("calls the right functions received from the DictionaryView component", () => {
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

    expect(functions.componentDidMount).not.toBeCalled;
    expect(functions.nextStep).not.toBeCalled;
    expect(functions.prevStep).toHaveBeenCalledTimes(1);
  });
});
