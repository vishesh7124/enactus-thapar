import { BoxReveal } from "./magicui/box-reveal";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import bag1 from "../assets/bag1.png";
import bag2 from "../assets/bag2.png";
import fil1 from "../assets/fil1.png";
import fil2 from "../assets/fil2.png";
import { Button } from "./ui/button";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className=" relative h-full w-full flex justify-center gap-4 items-center text-white max-[960px]:flex-col max-[960px]:gap-32 max-[500px]:gap-24 max-sm:pt-20 max-[380px]:gap-16  ">
      <motion.div
        animate={{ y: [-30, 0, -30] }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className=" relative flex justify-center max-sm:w-full items-center project w-1/5 max-[960px]:w-fit"
      >
        <div className="w-3xs absolute -top-48 max-[380px]:w-48 max-[380px]:-top-32 max-sm:left-8 ">
          <img src={bag1} alt="" className=" w-full object-contain  " />
        </div>
        <Button className="p-6 bg-[#FFF9E8] font-yatra text-zinc-950 rounded-full text-2xl text-center absolute top-4 max-sm:left-28 z-20 rotate-[-17deg] max-[960px]:left-0   ">
          अतरंगी
        </Button>
        <div className="w-3xs absolute -top-16 left-16 max-[500px]:-top-56 max-[500px]:left-32 max-[380px]:w-48 max-[380px]:-top-40 max-[960px]:left-0 max-[960px]:-top-44 ">
          <img src={bag2} alt="" className=" w-full object-contain  " />
        </div>
      </motion.div>

      <div className="flex flex-col justify-center items-center  ">
        <BoxReveal boxColor={"#FFC221"} duration={0.5}>
          <h1 className="text-7xl max-sm:text-6xl font-semibold  text-[#FFC221] ">Enactus</h1>
        </BoxReveal>
        <BoxReveal boxColor={"#FFC221"} duration={1}>
          <h1 className="text-7xl text-center max-sm:text-4xl font-semibold text-[#FFC221] ">
            Thapar University
          </h1>
        </BoxReveal>
        <TypewriterEffectSmooth className="text-center text-sm"
          words={[
            {
              text: "Ideate.",
              className: "text-4xl  font-semibold",
            },
            {
              text: "Innovate.",
              className: "text-4xl  font-semibold",
            },
            {
              text: "Incubate",
              className: "text-4xl  font-semibold",
            },
          ]}
        />
      </div>
      <motion.div
        className=" relative project max-sm:w-full w-1/5 max-[960px]:w-fit flex justify-center items-center"
        animate={{ y: [30, 0, 30] }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <div className="w-72 absolute -top-40 max-[380px]:w-48 max-sm:left-8 max-[380px]:-top-28 ">
          <img src={fil1} alt="" className=" w-full object-contain  " />
        </div>
        <Button className="p-6 bg-[#FFF9E8] font-yatra text-[#007A00] rounded-full text-2xl text-center absolute top-6 max-sm:left-20 z-20 rotate-[5deg] max-[960px]:left-0  ">
          aarohan
        </Button>
        <div className="w-72 absolute -top-6 left-16 max-[500px]:-top-32 max-sm:left-28 max-[380px]:w-48 max-[380px]:-top-28 max-[960px]:left-0 max-[960px]:-top-32 ">
          <img src={fil2} alt="" className=" w-full object-contain  " />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
