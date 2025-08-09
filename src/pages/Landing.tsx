import Hero from "@/components/Hero";
import About from "@/components/About";
import { motion } from "motion/react";
import atrangi from "../assets/atrangi.png";
import aarohan from "../assets/arohan.png";
import fil1 from "../assets/fil1.png";
import fil2 from "../assets/fil2.png";
import bag1 from "../assets/bag1.png";
import bag2 from "../assets/bag2.png";
import at1 from "../assets/at1.png";
import ar1 from "../assets/ar1.png";
import { projectsType } from "@/types/projectType";
import Project from "@/components/Project";
import Partners from "@/components/Partners";
// import { EventC } from "@/components/EventC";



const projects: projectsType = [
  {
    pname: "Atrangi",
    bg: at1,
    logo: atrangi,
    prop1: bag1,
    prop2: bag2,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
  {
    pname: "Aarohan",
    bg: ar1,
    logo: aarohan,
    prop1: fil2,
    prop2: fil1,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
];

const Landing = () => {
  return (
    <div className="relative z-0 w-full flex flex-col justify-center items-center gap-16 text-white pt-55">
      <Hero />
      <About />
      <div className=" relative z-0 w-full flex flex-col justify-center items-center gap-16 text-white">
        <div className="head">
          <div>
            <h2 className="text-6xl text-[#FFC221] max-sm:text-5xl ">
              Our Projects
            </h2>
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="11"
                viewBox="0 0 255 11"
                fill="none"
                className="max-md:w-40"
              >
                <motion.path
                  initial={{ opacity: 0, pathLength: 0 }}
                  whileInView={{
                    opacity: 1,
                    pathLength: 1,
                    transition: { duration: 1, delay: 0.5 },
                  }}
                  d="M1.60484 8.53679C147.007 11.185 317.557 2.10532 226.566 2.10532C47.7763 2.10531 -54.1787 -1.67774 32.2393 4.75368C114.447 10.8717 214.22 10.2028 254 9.67173"
                  stroke="#FFF9E8"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="115"
                height="11"
                viewBox="0 0 115 11"
                fill="none"
                className="max-md:w-20"
              >
                <motion.path
                  initial={{ opacity: 0, pathLength: 0 }}
                  whileInView={{
                    opacity: 1,
                    pathLength: 1,
                    transition: { duration: 1, delay: 1.5 },
                  }}
                  d="M1.27015 8.53679C66.2127 11.185 142.387 2.10532 101.747 2.10532C21.8922 2.10531 -23.645 -1.67774 14.9528 4.75368C51.67 10.8717 96.2328 10.2028 114 9.67173"
                  stroke="#FFF9E8"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center items-center gap-16 max-sm:flex-col mb-8 ">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>

        <div
          className="flex  w-full h-[33rem] max-sm:h-fit pb-10 justify-evenly items-center max-sm:flex-col mb-8 overflow-hidden max-sm:!mask-none "
          style={{
            maskImage:
              "linear-gradient(to top, transparent 0%, black 12.5%, black 87.5%, transparent 100%)",
          }}
        >
          {/* <EventC /> */}
          <Partners/>

        </div>
      </div>
      {/* <div className=" h-full w-full flex justify-center items-center text-white">
        Hello
      </div> */}
    </div>
  );
};

export default Landing;
