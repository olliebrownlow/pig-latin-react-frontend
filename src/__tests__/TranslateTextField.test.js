import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TranslateTextField from "../components/TranslatorViewComponents/SubmitFormComponents/TranslateTextfield";
import SubmitForm from "../components/TranslatorViewComponents/SubmitForm";
import TranslatorView from "../components/TranslatorView";
import Controller from "../components/Controller";

describe("TranslateTextField", () => {
  let getByTestId;

  beforeEach(() => {
    ({ getByTestId } = render(
      <Controller>
        <TranslatorView>
          <SubmitForm>
            <TranslateTextField />
          </SubmitForm>
        </TranslatorView>
      </Controller>,
    ));
  });

  afterEach(cleanup);

  it("is initially empty", async () => {
    const input = getByTestId("textToTranslate");
    expect(input.value).toBe("");
  });

  it("displays the text entered", () => {
    const input = getByTestId("textToTranslate");
    fireEvent.change(input, {
      target: { value: "risk" },
    });

    expect(input.value).toBe("risk");
  });
});
