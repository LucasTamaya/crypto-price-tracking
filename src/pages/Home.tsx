import CryptoCard from "../components/CryptoCard";
import { useCryptoData } from "../hooks/useCryptoData";

const Home: React.FC = () => {
  const { isLoading, isSuccess, error, data } = useCryptoData();

  return (
    <main>
      <>
        {isLoading && <p>Loading ...</p>}

        {error && <p>Error</p>}

        {isSuccess && (
          <main className="mt-10">
            <h2 className="text-center text-3xl font-bold">Top 100</h2>
            {data.map(
              ({ id, name, symbol, image, current_price, market_cap_rank }) => (
                <CryptoCard
                  key={id}
                  id={id}
                  name={name}
                  symbol={symbol}
                  image={image}
                  current_price={current_price}
                  market_cap_rank={market_cap_rank}
                />
              )
            )}
          </main>
        )}
      </>
    </main>
  );
};

export default Home;
