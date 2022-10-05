import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ChartTimes from "../components/chart/ChartTimes";
import ChartTypes from "../components/chart/ChartTypes";
import LinearChart from "../components/chart/LinearChart";
import { useChartData } from "../hooks/useChartData";
import { ChartDays, ChartType, IChartData } from "../types/chart";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";

const CryptoDetails: React.FC = () => {
  const [chartDays, setChartDays] = useState<ChartDays>(1);
  const [chartType, setChartType] = useState<ChartType>("prices");
  const [chartData, setChartData] = useState<IChartData | null>(null);

  const { id } = useParams();

  const { isLoading, isSuccess, error, data, refetch } = useChartData(
    id,
    chartDays,
    chartType
  );

  // refetch data if chartDays or chartType change
  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartDays, chartType]);

  useEffect(() => {
    if (isSuccess) {
      // get and format dates for the X axis
      const dates = data.map((tab) => {
        return new Date(tab[0]).toLocaleDateString();
      });

      // get prices for the Y axis
      const prices = data.map((tab) => {
        return tab[1];
      });

      // set the chartData with the data
      setChartData({
        labels: dates,
        datasets: [
          {
            label: "Price",
            data: prices,
            borderColor: "rgb(52 211 153)",
            pointStyle: "line",
            tension: 0.1,
            pointBorderColor: "transparent",
          },
        ],
      });
    }
  }, [isSuccess, data]);

  return (
    <main className="w-full h-screen min-h-screen bg-stone-700 pt-10">
      <>
        {isLoading && <p>Loading ...</p>}

        {error && <p>Error</p>}

        {isSuccess && chartData && (
          <>
            <h2 className="text-center text-emerald-400 text-3xl font-bold mb-10">
              {capitalizeFirstLetter(id)}
            </h2>

            <div className="max-w-[1000px] mx-auto mb-2 flex flex-row items-center justify-between">
              <ChartTypes chartType={chartType} setChartType={setChartType} />
              <ChartTimes chartDays={chartDays} setChartDays={setChartDays} />
            </div>

            <LinearChart data={chartData} />
          </>
        )}
      </>
    </main>
  );
};

export default CryptoDetails;
