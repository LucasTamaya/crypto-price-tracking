import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";

import CryptoCard from "../../../components/crypto/CryptoCard";

const MockedComponent = () => {
  return (
    <Router>
      <CryptoCard
        id="bitcoin"
        name="Bitcoin"
        symbol="BTC"
        image="https://btc.jpg"
        current_price={15000}
        market_cap_rank={1}
        key="bitcoin"
      />
    </Router>
  );
};

describe("CryptoCard Component", () => {
  it("should renders the component", () => {
    render(<MockedComponent />);

    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Bitcoin" })
    ).toBeInTheDocument();
    expect(screen.getByText("BTC")).toBeInTheDocument();
    expect(screen.getByText("$15000")).toBeInTheDocument();
    expect(screen.getByText("#1")).toBeInTheDocument();
  });

  it("should matches the snapshot", () => {
    const component = renderer.create(<MockedComponent />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
