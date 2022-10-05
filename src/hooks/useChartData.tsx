import axios from "axios";
import {
  useMutation,
  useQuery,
  UseMutationResult,
  UseQueryResult,
} from "@tanstack/react-query";

import { COINGECKO_API_URL } from "../constants/apiUrl";

type DataPoint = [number, number];

const fetchChartData = async (
  id: string | undefined,
  days: number
): Promise<DataPoint[]> => {
  const { data } = await axios.get(
    `${COINGECKO_API_URL}/${id}/market_chart?vs_currency=usd&days=${days}`
  );

  // for the moment I return only the prices, but maybe after I'll add market_cap and volumes too

  return data.prices;
};

export const useChartData = (
  id: string | undefined,
  days: number
): UseQueryResult<DataPoint[]> => {
  return useQuery(["chart"], () => fetchChartData(id, days));
};
