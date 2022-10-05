import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { COINGECKO_API_URL } from "../constants/apiUrl";
import { ICrypto } from "../types/crypto";

const fetchCryptoData = async (): Promise<ICrypto[]> => {
  console.log("I AM CALLED");

  const { data } = await axios.get(
    `${COINGECKO_API_URL}/markets?vs_currency=usd`
  );

  return data;
};

export const useCryptoData = (): UseQueryResult<ICrypto[]> => {
  return useQuery(["crypto"], () => fetchCryptoData());
};
