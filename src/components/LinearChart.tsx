import { Line } from "react-chartjs-2";
// import { Chart as ChartJS, ChartData, ChartOptions, defaults } from "chart.js";
// import Chart from "chart.js/auto";
import { Chart, registerables } from "chart.js";

import { IChartData } from "../types/chart";

// to deals with: Uncaught Error: "category" is not a registered scale
Chart.register(...registerables);

interface Props {
  // data?: IChartData;
  data: IChartData;
}

const tab = [1, 2, 3];

console.log(tab);

const newTab = tab.map((t) => t);

console.log("newTab: ", newTab);

const LinearChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-[700px]">
      <Line data={data} />
    </div>
  );
};

export default LinearChart;
