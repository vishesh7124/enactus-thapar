import Solution_banner from "@/components/Solution_Banner";
import aatrangiBanner from "../assets/atrangi_banner.png";
import Problem_banner from "@/components/Problem_banner";

const Proj = () => {
  return (
    <div className="relative z-0 w-full flex flex-col justify-center items-center gap-16 text-white pt-55">
        <img src={aatrangiBanner} className="mb-20 w-[1348px] h-auto p-10"/>
        <Problem_banner />
        <Solution_banner />
    </div>
  )
}

export default Proj;
