import Solution_banner from "@/components/Solution_Banner";
import aatrangiBanner from "../assets/atrangi_banner.png";
import Problem_banner from "@/components/Problem_banner";
import BusinessModel from "@/components/BuisnessModel";
import Impact from "@/components/Impact";
import UnitEconomics from "@/components/UnitEconomics";

const problems= [
  "Problem 1",
  "Problem 2",
  "Problem 3",
  "Problem 4",
]
const solutions= [
  "Solution 1",
  "Solution 2",
  "Solution 3",
  "Solution 4",
]

const Proj = () => {
  return (
    <div className="relative z-0 w-full flex flex-col justify-center items-center gap-16 text-white pt-55">
        <img src={aatrangiBanner} className="mb-20 mx-auto w-4xl max-sm:w-2xl h-auto "/>
        <Problem_banner problems={problems} />
        <Solution_banner solutions={solutions} />
        <UnitEconomics />
        <BusinessModel />
        <Impact />
    </div>
  )
}

export default Proj;
