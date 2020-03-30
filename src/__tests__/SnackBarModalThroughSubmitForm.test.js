import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SnackBarModal from "../components/SharedComponents/SnackBarModal";
import SubmitForm from "../components/TranslatorViewComponents/SubmitForm";

describe("The SnackBar modal", () => {
  let snackbarmsg;
  let submitFormFunctions;
  let getByTestId;
  let queryByText;

  beforeEach(() => {
    snackbarmsg = "Please enter text to translate";
    submitFormFunctions = {
      values: {
        english: "",
      },
      handleChange: jest.fn(),
    };

    ({ getByTestId, queryByText } = render(
      <SubmitForm submitFormFunctions={submitFormFunctions}>
        <SnackBarModal />
      </SubmitForm>,
    ));

    expect(SnackBarModal).not.toBeInTheDOM;

    fireEvent.submit(getByTestId("submitForm"));
  });

  afterEach(cleanup);

  it("is in the DOM", () => {
    expect(SnackBarModal).toBeInTheDOM;
  });

  it("has focus", () => {
    expect(getByTestId("modal")).toHaveFocus;
  });

  it("shows the right text", () => {
    expect(getByTestId("modal").textContent).toContain(snackbarmsg);
  });

  it("has an autoHide function which makes it disappear from the DOM by itself", async () => {
    await waitForElementToBeRemoved(() => queryByText(snackbarmsg));
    expect(queryByText(snackbarmsg)).not.toBeInTheDOM;
  });

  it("disappears from the DOM when clicked", () => {
    fireEvent.click(getByTestId("modal"));
    expect(SnackBarModal).not.toBeInTheDOM;
  });
});
