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
    <>
      <div>
        <div className="flex-row items-center justify-between border-t border-b border-white py-5 px-3">
          <div className="flex-row items-center gap-x-3">
            <img src={image} className="w-8 h-8" alt={`${name}`} />
            <div className="flex-col justify-center">
              <p className="text-white font-bold">{name}</p>
              <p className="text-gray-400 uppercase">{symbol}</p>
            </div>
          </div>
          <div className="flex-col justify-center items-end gap-y-1">
            <p className="text-white font-bold">${current_price}</p>
            <div className="flex-row justify-center items-center bg-yellow rounded-lg px-2">
              <p className="text-dark-blue text-xs font-bold">
                {market_cap_rank}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoCard;
