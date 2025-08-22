import DonutChart from "./DonutChart";

 type ChartDataType ={ browser: string, visitors: number, fill: string }


interface UnitEconomicsProps{
  chartData:ChartDataType[]
}

const UnitEconomics = ({chartData}:UnitEconomicsProps) => {
  return (
    <div className="flex w-full justify-evenly items-center  max-sm:flex-col-reverse max-sm:justify-center max-sm:gap-12">
      <DonutChart chartData={chartData} />
      <div className="flex flex-col justify-center items-center gap-0">
        <p
          className={`text-6xl max-sm:text-4xl text-[#FFC221]  font-seriguel text-uppercase font-bold `}
        >
          UNIT{" "}
        </p>
        <p
          className={`text-6xl max-sm:text-4xl text-white font-seriguel text-uppercase font-bold  `}
        >
          ECONOMICS{" "}
        </p>
      </div>
    </div>
  );
};

export default UnitEconomics;
