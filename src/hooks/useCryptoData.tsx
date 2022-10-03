import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { COINGECKO_API_URL } from "../constants/apiUrl";

interface ICrypto {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap_rank: number;
}

const fetchCryptoData = async (): Promise<ICrypto[]> => {
  const { data } = await axios.get(`${COINGECKO_API_URL}`);

  return data;
};

export const useCryptoData = (): UseQueryResult<ICrypto[]> => {
  return useQuery(["productsByCategory"], () => fetchCryptoData());
};
