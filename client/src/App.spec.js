import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

afterEach(cleanup);

describe("<App />", () => {
  it("should render without errors", async () => {
    render(App);
  });

  it("should render find an event", () => {
    const { getByText } = render(App);
    getByText(/find an event/i);
  });
});
