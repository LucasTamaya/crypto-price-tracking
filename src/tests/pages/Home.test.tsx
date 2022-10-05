/* eslint-disable testing-library/prefer-screen-queries */
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { rest } from "msw";

import Home from "../../pages/Home";
import { renderWithClient } from "../msw/helpers";
import { server } from "../msw/setupTests";

const MockedComponent = () => {
  return (
    <Router>
      <Home />
    </Router>
  );
};

describe("Home Page", () => {
  it("should renders the page", () => {
    renderWithClient(<MockedComponent />);

    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("should renders some crypto items if there is no error during the fetch req", async () => {
    const { findAllByRole } = renderWithClient(<MockedComponent />);

    expect(await findAllByRole("heading", { level: 3 })).toHaveLength(3);
    expect(await findAllByRole("img")).toHaveLength(3);
  });

  it("should renders an error message if there is an error during the fetch req", async () => {
    server.use(
      rest.get("*", (_, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const { findByText } = renderWithClient(<MockedComponent />);

    expect(await findByText("Error")).toBeInTheDocument();
  });
});
