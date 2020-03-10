import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TranslatorView from "../components/TranslatorView";

describe("TranslatorView", () => {
  afterEach(cleanup);

  test.skip("Calls the onSubmit function when submit is clicked", () => {
    var values = {};
    values[0] = "risk";

    const { getByTestId } = render(
      <TranslatorView handleChange={jest.fn()} values />,
    );

    fireEvent.click(getByTestId("translateButton"));

    expect(jest.fn()).toHaveBeenCalledTimes(1);
  });
});
