import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

import { IChartData } from "../../types/chart";

// to deals with: Uncaught Error: "category" is not a registered scale
Chart.register(...registerables);

const chartOptions = {
  plugins: { tooltip: { enabled: false }, legend: { display: false } },
  scales: {
    yAxes: {
      ticks: {
        color: "white",
      },
    },
    xAxes: {
      ticks: {
        color: "white",
      },
    },
  },
};

interface Props {
  data: IChartData;
}

const LinearChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="max-w-[1000px] mx-auto">
      <Line data={data} options={chartOptions} />
      {/* <Line
        data={{
          labels: ["A", "B", "C", "D"],
          datasets: [
            {
              label: "Title",
              data: [1, 5, 3, 4, 7],
              backgroundColor: "blue",
              borderColor: "blue",
              pointBackgroundColor: "green",
              pointStyle: "line",
              borderWidth: 2,
              pointBorderColor: "transparent",
              tension: 0.1,
            },
          ],
        }}
        options={{
          plugins: {
            tooltip: { enabled: false },
            legend: { display: false },
          },
          scales: {
            yAxes: {
              grid: {
                color: "white",
              },
              ticks: {
                color: "white",
              },
            },
            xAxes: {
              grid: {
                color: "white",
              },
              ticks: {
                color: "white",
              },
            },
          },
        }}
      /> */}
    </div>
  );
};

export default LinearChart;
