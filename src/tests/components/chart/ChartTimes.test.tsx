import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ChartTimes from "../../../components/chart/ChartTimes";

const mockedSetChartDays = jest.fn();

describe("ChartTimes Component", () => {
  it("should renders the component", () => {
    render(<ChartTimes chartDays={1} setChartDays={mockedSetChartDays} />);

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });

  it("should set the chartDays to 7 if I click on 7D button", async () => {
    render(<ChartTimes chartDays={1} setChartDays={mockedSetChartDays} />);

    fireEvent.click(screen.getByText("7D"));

    expect(mockedSetChartDays).toHaveBeenCalledTimes(1);
    expect(mockedSetChartDays).toHaveBeenCalledWith(7);
  });
});
