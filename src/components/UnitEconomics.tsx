import DonutChart from "./DonutChart";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const UnitEconomics = () => {
  return (
    <div className="flex w-full justify-evenly items-center  max-sm:flex-col-reverse max-sm:justify-center max-sm:gap-12">
      <DonutChart chartData={chartData} />
      <div className="flex flex-col justify-center items-center gap-0">
        <p
          className={`text-6xl text-[#FFC221]  font-seriguel text-uppercase font-bold `}
        >
          UNIT{" "}
        </p>
        <p
          className={`text-6xl text-white font-seriguel text-uppercase font-bold  `}
        >
          ECONOMICS{" "}
        </p>
      </div>
    </div>
  );
};

export default UnitEconomics;
