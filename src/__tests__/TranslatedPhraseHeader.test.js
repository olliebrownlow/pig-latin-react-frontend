import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TranslatedPhraseHeader from "../components/TranslatorViewComponents/SubmitFormComponents/TranslatedPhraseHeader";

describe("TranslatedPhraseHeader", () => {
  let getByTestId;
  beforeEach(() => {
    ({ getByTestId } = render(<TranslatedPhraseHeader />));
  });
  afterEach(cleanup);

  it("displays the right text", () => {
    expect(getByTestId("header").textContent).toEqual("Pig Latin:");
  });

  it("has the right style", () => {
    expect(getByTestId("header")).toHaveStyle({
      fontSize: "14px",
    });
  });
});
