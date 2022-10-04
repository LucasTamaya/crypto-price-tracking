export interface IChartData {
  labels: string[];
  datasets: [
    {
      label: string;
      data: number[];
      borderColor: string | string[];
    }
  ];
}
