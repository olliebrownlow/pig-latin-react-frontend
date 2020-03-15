import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AppBarHeader from "../components/AppBarHeader";

describe("AppBarHeader", () => {
  afterEach(cleanup);

  test.skip("Renders the right text", () => {
    const settings = { text: "I am the right text" };

    const { getByTestId } = render(<AppBarHeader settings />);

    expect(jest.fn()).toHaveBeenCalledTimes(1);
  });
});
