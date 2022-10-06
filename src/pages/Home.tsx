import { ScaleLoader } from "react-spinners";
import Helmet from "../components/common/Helmet";

import CryptoCard from "../components/crypto/CryptoCard";
import { BASE_URL } from "../constants/urls";
import { useCryptoData } from "../hooks/useCryptoData";

const Home: React.FC = () => {
  const { isLoading, isSuccess, error, data } = useCryptoData();

  return (
    <>
      <Helmet
        title="Crypto Tracker - Top 100"
        content="Checkout the top 100 cryptos of the moment!"
        path={`${BASE_URL}/`}
      />
      <main className="w-full h-full min-h-[90vh] bg-stone-700 pt-10">
        <>
          {isLoading && (
            <div className="w-full h-[80vh] flex flex-row justify-center items-center">
              <ScaleLoader color="#34D399" width={10} height={50} />
            </div>
          )}

          {error && <p>Error</p>}

          {isSuccess && (
            <>
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
            </>
          )}
        </>
      </main>
    </>
  );
};

export default Home;
