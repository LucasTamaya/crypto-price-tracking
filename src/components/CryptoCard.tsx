import { ICrypto } from "../types/crypto";

const CryptoCard: React.FC<ICrypto> = ({
  id,
  name,
  symbol,
  image,
  current_price,
  market_cap_rank,
}) => {
  return (
    <div className="flex flex-row items-center justify-between border border-white rounded-xl py-5 px-3 cursor-pointer transition-transform hover:scale-105">
      <div className="flex flex-row items-center gap-x-3">
        <img src={image} className="w-8 h-8" alt={`${name}`} />
        <div className="flex flex-col justify-center">
          <h3 className="text-white font-bold">{name}</h3>
          <p className="text-gray-400 uppercase">{symbol}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-end gap-y-1">
        <p className="text-white font-bold">${current_price}</p>
        <div className=" flexflex-row justify-center items-center bg-yellow rounded-lg px-2">
          <p className="text-gray-400 font-bold">#{market_cap_rank}</p>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
