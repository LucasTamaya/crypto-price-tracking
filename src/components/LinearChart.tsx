import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

interface Props {
  data: any;
}

const LinearChart: React.FC<Props> = ({ data }) => {
  return <Line data={data} />;
};

export default LinearChart;
