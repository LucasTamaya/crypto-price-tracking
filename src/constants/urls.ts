export const COINGECKO_API_URL = "https://api.coingecko.com/api/v3/coins";

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://crypto-price-tracking-lucastamaya.vercel.app"
    : "http://localhost:3000";
