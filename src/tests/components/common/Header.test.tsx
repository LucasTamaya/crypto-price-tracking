import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "../../../components/common/Header";

describe("Header Component", () => {
  it("should renders the component", () => {
    render(<Header />);

    expect(screen.getByText("Crypto Price Tracking")).toBeInTheDocument();
  });
});
