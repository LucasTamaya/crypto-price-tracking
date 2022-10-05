import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useChartData } from "../hooks/useChartData";
import LinearChart from "./LinearChart";
import { IChartData } from "../types/chart";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import ChartTime from "./ChartTime";

const CryptoDetails: React.FC = () => {
  const [days, setDays] = useState<number>(1);
  const [chartData, setChartData] = useState<IChartData | null>(null);

  const { id } = useParams();

  const { isLoading, isSuccess, error, data, refetch } = useChartData(id, days);

  useEffect(() => {
    refetch();
  }, [days]);

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
              <div className="flex flex-row items-center gap-x-4 bg-slate-100/10 p-2 rounded-lg">
                <p>Price</p>
                <p>Market Data</p>
              </div>
              <ChartTime days={days} setDays={setDays} />
            </div>

            <LinearChart data={chartData} />
          </>
        )}
      </>
    </main>
  );
};

export default CryptoDetails;
