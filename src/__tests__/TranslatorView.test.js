import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TranslatorView from "../components/TranslatorView";

describe("TranslatorView", () => {
  let submitFormFunctions;
  let getByTestId;
  let getByText;

  beforeEach(() => {
    submitFormFunctions = {
      handleChange: jest.fn(),
      values: { english: "placeHolder" },
    };

    ({ getByTestId, getByText } = render(
      <TranslatorView
        submitFormFunctions={submitFormFunctions}
        handleChange={submitFormFunctions.handleChange}
        values={submitFormFunctions.values}
      />,
    ));
  });

  afterEach(cleanup);

  it("has the right elements and text", () => {
    expect(getByTestId("cardElement")).toBeInTheDOM;
    expect(getByText("English to Pig Latin Translator")).toBeInTheDocument;
    expect(getByText("(Englishay otay Igpay Atinlay Anslatortray)"))
      .toBeInTheDocument;
    expect(getByText("Translation History")).toBeInTheDocument;
    expect(getByText("Enter text")).toBeInTheDocument;
    expect(getByText("Pig Latin:")).toBeInTheDocument;
    expect(getByText("Submit")).toBeInTheDocument;
  });
});
