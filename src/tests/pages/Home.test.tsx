/* eslint-disable testing-library/prefer-screen-queries */
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "../../pages/Home";
import { renderWithClient } from "../msw/helpers";

import "@testing-library/jest-dom/extend-expect";
import { server } from "../msw/server";
import { rest } from "msw";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("Home Page", () => {
  it("should renders the page", () => {
    renderWithClient(<Home />);

    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("should renders some crypto items if there is no error during the fetch req", async () => {
    const { findAllByRole } = renderWithClient(<Home />);

    expect(await findAllByRole("heading", { level: 3 })).toHaveLength(3);
    expect(await findAllByRole("img")).toHaveLength(3);
  });

  it("should renders an error message if there is an error during the fetch req", async () => {
    server.use(
      rest.get("*", (_, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const { findByText } = renderWithClient(<Home />);

    expect(await findByText("Error")).toBeInTheDocument();
  });
});
