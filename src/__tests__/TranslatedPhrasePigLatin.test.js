import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TranslatedPhrasePigLatin from "../components/TranslatorViewComponents/SubmitFormComponents/TranslatedPhrasePigLatin";

describe("TranslatedPhrasePigLatin", () => {
  let getByTestId;
  let submitFormFunctions;
  beforeEach(() => {
    submitFormFunctions = {
      values: {
        pigLatin: "iskray",
      },
    };
    ({ getByTestId } = render(
      <TranslatedPhrasePigLatin submitFormFunctions={submitFormFunctions} />,
    ));
  });
  afterEach(cleanup);

  it("displays the right text", () => {
    expect(getByTestId("translation").textContent).toEqual("iskray");
  });
});
