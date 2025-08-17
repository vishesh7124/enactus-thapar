import Solution_banner from "@/components/Solution_Banner";
import aatrangiBanner from "../assets/atrangi_banner.png";
import Problem_banner from "@/components/Problem_banner";
import BusinessModel from "@/components/BuisnessModel";

const Proj = () => {
  return (
    <div className="relative z-0 w-full flex flex-col justify-center items-center gap-16 text-white pt-55">
        <img src={aatrangiBanner} className="mb-20 w-full h-auto max-w-[480px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1348px] p-10 sm:max-w-7xl"/>
        <Problem_banner />
        <Solution_banner />
        <BusinessModel />
    </div>
  )
}

export default Proj;
