interface Props {
  days: number;
  setDays: React.Dispatch<React.SetStateAction<number>>;
}

const ChartTime: React.FC<Props> = ({ days, setDays }) => {
  const baseParaStyle = "font-bold cursor-pointer";

  return (
    <div className="flex flex-row items-center gap-x-4 bg-slate-100/10 p-2 rounded-lg">
      <p
        className={`${baseParaStyle} ${
          days === 1 ? "text-emerald-400" : "text-white"
        }`}
        onClick={() => setDays(1)}
      >
        1D
      </p>
      <p
        className={`${baseParaStyle} ${
          days === 7 ? "text-emerald-400" : "text-white"
        }`}
        onClick={() => setDays(7)}
      >
        7D
      </p>
      <p
        className={`${baseParaStyle} ${
          days === 30 ? "text-emerald-400" : "text-white"
        }`}
        onClick={() => setDays(30)}
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
