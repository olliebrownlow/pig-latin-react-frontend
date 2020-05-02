import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DictionaryView from "../components/DictionaryView";

describe("The DictionaryView card element", () => {
  afterEach(cleanup);

  it("has the right elements and text", () => {
    const values = jest.fn();

    const { getByTestId, getByText } = render(
      <DictionaryView values={values} />,
    );
    expect(getByTestId("cardElement")).toBeInTheDOM;

    expect(getByText("English/Pig Latin Translations")).toBeInTheDocument;
    expect(getByText("(Englishay/Igpay Atinlay anslationstray)"))
      .toBeInTheDocument;
    expect(getByText("Translation history")).toBeInTheDocument;
    expect(getByText("search")).toBeInTheDocument;
    expect(getByText("5 rows")).toBeInTheDocument;
  });
});
