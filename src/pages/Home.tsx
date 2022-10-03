import { useCryptoData } from "../hooks/useCryptoData";

const Home: React.FC = () => {
  const { isLoading, error, data } = useCryptoData();

  return (
    <>
      {isLoading && <p>Loading ...</p>}

      {error && <p>Error</p>}

      {data && (
        <main className="mt-10">
          <h2 className="text-center text-3xl font-bold">Top 100</h2>
        </main>
      )}
    </>
  );
};

export default Home;
