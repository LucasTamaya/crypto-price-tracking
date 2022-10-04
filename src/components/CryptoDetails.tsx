import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useChartData } from "../hooks/useChartData";
import LinearChart from "./LinearChart";
import { IChartData } from "../types/chart";

const CryptoDetails: React.FC = () => {
  const [days, setDays] = useState<number>(1);
  const [chartData, setChartData] = useState<IChartData | null>(null);

  const { id } = useParams();

  const { isLoading, isSuccess, error, data } = useChartData(id, days);

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
          },
        ],
      });
    }
  }, [isSuccess, data]);

  return (
    <main>
      <>
        {isLoading && <p>Loading ...</p>}

        {error && <p>Error</p>}

        {isSuccess && chartData && <LinearChart data={chartData} />}
      </>
    </main>
  );
};

export default CryptoDetails;
