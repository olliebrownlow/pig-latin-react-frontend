import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TranslatorView from "../components/TranslatorView";

describe("TranslatorView", () => {
  let submitFormFunctions;
  let getByTestId;

  beforeEach(() => {
    submitFormFunctions = {
      handleChange: jest.fn(),
      values: { english: "placeHolder" },
    };

    ({ getByTestId } = render(
      <TranslatorView
        submitFormFunctions={submitFormFunctions}
        handleChange={submitFormFunctions.handleChange}
        values={submitFormFunctions.values}
      />,
    ));
  });

  afterEach(cleanup);

  it("has the right elements in the DOM", () => {
    expect(getByTestId("appBar")).toBeInTheDOM;
    expect(getByTestId("button")).toBeInTheDOM;
    expect(getByTestId("submitForm")).toBeInTheDOM;
  });
});
