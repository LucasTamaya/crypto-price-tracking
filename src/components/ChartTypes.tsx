import { ChartType } from "../types/chart";

interface Props {
  chartType: ChartType;
  setChartType: React.Dispatch<React.SetStateAction<ChartType>>;
}

const ChartTypes: React.FC<Props> = ({ chartType, setChartType }) => {
  const baseParaStyle = "font-bold cursor-pointer";

  return (
    <div className="flex flex-row items-center gap-x-4 bg-slate-100/10 p-2 rounded-lg">
      <p
        className={`${baseParaStyle} ${
          chartType === "prices" ? "text-emerald-400" : "text-white"
        }`}
        onClick={() => setChartType("prices")}
      >
        Price
      </p>
      <p
        className={`${baseParaStyle} ${
          chartType === "market_caps" ? "text-emerald-400" : "text-white"
        }`}
        onClick={() => setChartType("market_caps")}
      >
        Market Caps
      </p>
      <p
        className={`${baseParaStyle} ${
          chartType === "total_volumes" ? "text-emerald-400" : "text-white"
        }`}
        onClick={() => setChartType("total_volumes")}
      >
        Volumes
      </p>
    </div>
  );
};

export default ChartTypes;
