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

const LinearChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="max-w-[1000px] mx-auto">
      <Line
        data={data}
        options={{
          plugins: { tooltip: { enabled: false }, legend: { display: false } },
        }}
      />
      {/* <Line
        data={{
          labels: ["A", "B", "C", "D"],
          datasets: [
            {
              label: "Title",
              data: [1, 5, 3, 4, 7],
              backgroundColor: "green",
              borderColor: "green",
              pointBackgroundColor: "green",
              pointStyle: "line",
              borderWidth: 2,
              pointBorderColor: "transparent",
              tension: 0.1,
            },
          ],
        }}
        options={{
          plugins: { tooltip: { enabled: false }, legend: { display: false } },
        }}
      /> */}
    </div>
  );
};

export default LinearChart;
