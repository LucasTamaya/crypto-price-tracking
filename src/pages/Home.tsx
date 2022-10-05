import { useEffect } from "react";
import CryptoCard from "../components/CryptoCard";
import { COINGECKO_API_URL } from "../constants/apiUrl";
import { useCryptoData } from "../hooks/useCryptoData";

const Home: React.FC = () => {
  const { isLoading, isSuccess, error, data } = useCryptoData();

  return (
    <main className="w-full h-full min-h-screen bg-stone-700 pt-10">
      <>
        {isLoading && <p>Loading ...</p>}

        {error && <p>Error</p>}

        {isSuccess && (
          <main>
            <h2 className="text-center text-emerald-400 text-3xl font-bold mb-10">
              Top 100
            </h2>
            <ul className="max-w-[700px] mx-auto">
              {data.map(
                ({
                  id,
                  name,
                  symbol,
                  image,
                  current_price,
                  market_cap_rank,
                }) => (
                  <li key={id} className="mb-5">
                    <CryptoCard
                      id={id}
                      name={name}
                      symbol={symbol}
                      image={image}
                      current_price={current_price}
                      market_cap_rank={market_cap_rank}
                    />
                  </li>
                )
              )}
            </ul>
          </main>
        )}
      </>
    </main>
  );
};

export default Home;
