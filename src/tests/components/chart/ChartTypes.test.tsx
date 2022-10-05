import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ChartTypes from "../../../components/chart/ChartTypes";

const mockedSetChartType = jest.fn();

describe("ChartTimes Component", () => {
  it("should renders the component", () => {
    render(<ChartTypes chartType="prices" setChartType={mockedSetChartType} />);

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });

  it("should set the chartType to 'market_caps' if I click on Market Caps button", async () => {
    render(<ChartTypes chartType="prices" setChartType={mockedSetChartType} />);

    fireEvent.click(screen.getByText("Market Caps"));

    expect(mockedSetChartType).toHaveBeenCalledTimes(1);
    expect(mockedSetChartType).toHaveBeenCalledWith("market_caps");
  });
});
