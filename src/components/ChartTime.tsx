import { useState } from "react";

const ChartTime: React.FC = () => {
  const [isActive, setIsActive] = useState<number>(0);

  const baseParaStyle = "font-bold cursor-pointer";

  return (
    <div className="flex flex-row items-center gap-x-4 bg-slate-100/10 p-2 rounded-lg">
      <p
        className={`${baseParaStyle} ${
          isActive === 0 ? "text-emerald-400" : "text-white"
        }`}
        onClick={() => setIsActive(0)}
      >
        1D
      </p>
      <p
        className={`${baseParaStyle} ${
          isActive === 1 ? "text-emerald-400" : "text-white"
        }`}
        onClick={() => setIsActive(1)}
      >
        7D
      </p>
      <p
        className={`${baseParaStyle} ${
          isActive === 2 ? "text-emerald-400" : "text-white"
        }`}
        onClick={() => setIsActive(2)}
      >
        1M
      </p>

      {/* <p
        className={`${baseParaStyle} ${
          oneDayIsActive ? "text-emerald-400" : "text-white"
        }`}
        onClick={() => setOneDayIsActive((prev) => !prev)}
      >
        1D
      </p>
      <p
        className={`${baseParaStyle} ${
          sevenDaysIsActive ? "text-emerald-400" : "text-white"
        }`}
        onClick={(e) => setSevenDaysIsActive((prev) => !prev)}
      >
        7D
      </p>
      <p
        className={`${baseParaStyle} ${
          oneMonthIsActive ? "text-emerald-400" : "text-white"
        }`}
        onClick={() => setOneMonthIsActive((prev) => !prev)}
      >
        1M
      </p> */}
    </div>
  );
};

export default ChartTime;
