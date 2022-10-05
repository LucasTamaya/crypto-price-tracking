export interface IChartData {
  labels: string[];
  datasets: [
    {
      label: string;
      data: number[];
      borderColor: string | string[];
      pointStyle: string;
      tension: number;
      pointBorderColor: string;
    }
  ];
}

export type ChartType = "prices" | "market_caps" | "total_volumes";

export type ChartDays = 1 | 7 | 30;
