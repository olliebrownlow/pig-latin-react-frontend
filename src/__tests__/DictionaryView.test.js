import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controller from "../components/Controller";
import DictionaryView from "../components/DictionaryView";
import TableOfTranslations from "../components/DictionaryViewComponents/TableOfTranslations";

describe("The DictionaryView card element", () => {
  afterEach(cleanup);

  it.skip("has the right elements in the DOM", () => {
    const items = {
      values: { allTranslations: "placeHolder" },
    };

    const { getByTestId } = render(
      // <Controller>
      <DictionaryView items={items} values={items.values}>
        <TableOfTranslations />
      </DictionaryView>,
      // </Controller>,
    );

    // fireEvent.click(getByTestId("button"));

    expect(getByTestId("appBarHeaderElement")).toBeInTheDOM;
    expect(getByTestId("cardElement")).toBeInTheDOM;
    expect(getByTestId("chipButtonElement")).toBeInTheDOM;
    expect(getByTestId("cardContentElement")).toBeInTheDOM;
    expect(getByTestId("tableOfTranslationsElement")).toBeInTheDOM;

    // expect(getByTestId("cardElement")).toHaveStyle({
    //   width: 850,
    //   justify: "center",
    // });
  });
});
