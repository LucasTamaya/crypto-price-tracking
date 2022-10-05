import { ChartDays } from "../types/chart";

interface Props {
  chartDays: ChartDays;
  setChartDays: React.Dispatch<React.SetStateAction<ChartDays>>;
}

const ChartTimes: React.FC<Props> = ({ chartDays, setChartDays }) => {
  const baseParaStyle = "font-bold cursor-pointer";

  return (
    <div className="flex flex-row items-center gap-x-4 bg-slate-100/10 p-2 rounded-lg">
      <p
        className={`${baseParaStyle} ${
          chartDays === 1 ? "text-emerald-400" : "text-white"
        }`}
        onClick={() => setChartDays(1)}
      >
        1D
      </p>
      <p
        className={`${baseParaStyle} ${
          chartDays === 7 ? "text-emerald-400" : "text-white"
        }`}
        onClick={() => setChartDays(7)}
      >
        7D
      </p>
      <p
        className={`${baseParaStyle} ${
          chartDays === 30 ? "text-emerald-400" : "text-white"
        }`}
        onClick={() => setChartDays(30)}
      >
        1M
      </p>
    </div>
  );
};

export default ChartTimes;
