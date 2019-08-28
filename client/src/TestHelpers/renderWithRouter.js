import React from "react";
import { Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import {} from "../store/index";

const renderWithRouterAndProvider = (
  app,
  { route = "/", history = createMemoryHistory({ initialEntries: [route] }) } = {}
) => {
  return {
    ...render()
  };
};
