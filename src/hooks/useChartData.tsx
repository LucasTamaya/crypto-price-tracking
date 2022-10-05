import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { COINGECKO_API_URL } from "../constants/apiUrl";
import { ChartDays, ChartType } from "../types/chart";

type DataPoint = [number, number];

const fetchChartData = async (
  id: string | undefined,
  days: ChartDays,
  type: ChartType
): Promise<DataPoint[]> => {
  const { data } = await axios.get(
    `${COINGECKO_API_URL}/${id}/market_chart?vs_currency=usd&days=${days}`
  );

  switch (type) {
    case "prices":
      return data.prices;
    case "market_caps":
      return data.market_caps;

    default:
      return data.total_volumes;
  }

  // if (type === "prices") {
  //   return data.prices;
  // }

  // if (type === "market_caps") {
  //   return data.market_caps;
  // } else {
  //   return data.total_volumes;
  // }
};

export const useChartData = (
  id: string | undefined,
  days: ChartDays,
  type: ChartType
): UseQueryResult<DataPoint[]> => {
  return useQuery(["chart"], () => fetchChartData(id, days, type));
};
