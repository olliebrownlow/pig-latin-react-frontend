import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AppBarHeader from "../components/SharedComponents/AppBarHeader";

describe("AppBarHeader", () => {
  let settings;
  let getByTestId;

  beforeEach(() => {
    settings = {
      appBarEnglish: "I am the right text",
      appBarPigLatin: "(iay amay ethay ightray esttay)",
      appBarPosition: "static",
    };

    ({ getByTestId } = render(<AppBarHeader settings={settings} />));
  });

  afterEach(cleanup);

  it("renders the right text", () => {
    expect(getByTestId("headerEnglish").textContent).toEqual(
      settings.appBarEnglish,
    );

    expect(getByTestId("headerPigLatin").textContent).toEqual(
      settings.appBarPigLatin,
    );
  });

  it("has the right styles", () => {
    expect(getByTestId("position")).toHaveStyle({
      background: "#ffe300",
      padding: "20px",
      position: settings.appBarPosition,
    });
  });
});
