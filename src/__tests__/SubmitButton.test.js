import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SubmitButton from "../components/TranslatorViewComponents/SubmitFormComponents/SubmitButton";

describe("The Submit Button", () => {
  afterEach(cleanup);

  it("has the right styling", () => {
    const { getByTestId } = render(<SubmitButton />);

    expect(getByTestId("translateButton")).toHaveStyle({
      backgroundColor: "#ffe300",
      width: 150,
    });

    expect(getByTestId("translateButton")).toHaveTextContent("Submit");
  });
});
