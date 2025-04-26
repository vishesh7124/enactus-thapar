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
    <>
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
        <div className="flex w-full justify-center items-center gap-16 max-sm:flex-col ">
          {projects.map((project, index) => (
            // <div
            //   key={index}
            //   className=" relative   p-10 overflow-hidden w-5/12 max-sm:w-10/12  flex flex-col justify-center items-center rounded-4xl text-white   "
            //   onMouseEnter={() => setCardAnimation(true)}
            //   onMouseLeave={() => setCardAnimation(false)}
            // >
            //   <motion.div
            //     className="absolute inset-0 z-0"
            //     style={{
            //       backgroundImage: `url(${project.bg})`,
            //       backgroundSize: "cover",
            //       backgroundPosition: "center",
            //     }}
            //     animate={{
            //       opacity: cardAnimation ? 0 : 1,
            //     }}
            //     transition={{
            //       duration: 0.5,
            //       ease: "easeInOut",
            //     }}
            //   />

            //   <motion.div
            //     className={`absolute inset-0 z-10 bg-[#30303074]`}
            //     animate={{
            //       opacity: cardAnimation ? 1 : 0,
            //     }}
            //     transition={{
            //       duration: 0.5,
            //       ease: "easeInOut",
            //     }}
            //   />
            //   <div className="relative z-20 w-full flex flex-col items-center">
            //     <div className="images  w-full relative flex justify-center items-center ">
            //       <motion.div
            //         initial={{ y: -210, x: -30 }}
            //         animate={
            //           cardAnimation
            //             ? {
            //                 y: 0,
            //                 x: 15,
            //                 transition: {
            //                   type: "spring",
            //                   duration: 1.5,
            //                   bounce: 0.3,
            //                 },
            //               }
            //             : {
            //                 y: -210,
            //                 x: -30,
            //                 transition: { type: "keyframes", duration: 0.5 },
            //               }
            //         }
            //         className="z-10 w-[35%] -top-6    left-2 absolute"
            //       >
            //         <img
            //           src={project.prop1}
            //           className=" min-h-10/12  object-contain "
            //           alt=""
            //         />
            //       </motion.div>

            //       <motion.img
            //         src={project.logo}
            //         alt=""
            //         className="  w-1/2 object-contain z-20 "
            //         initial={{ width: "75%", height:"20rem" }}
            //         animate={
            //           cardAnimation
            //             ? {
            //                 width: "50%",
            //                 height:"12rem",
            //                 transition: { type: "tween", duration:1.5},
            //               }
            //             : ""
            //         }
            //       />
            //       <motion.div
            //         initial={{ x: 80, y: 380 }}
            //         animate={
            //           cardAnimation
            //             ? {
            //                 y: 0,
            //                 x: 10,
            //                 transition: {
            //                   type: "spring",
            //                   duration: 1.5,
            //                   bounce: 0.3,
            //                 },
            //               }
            //             : {
            //                 x: 80,
            //                 y: 380,
            //                 transition: { type: "keyframes", duration: 0.8 },
            //               }
            //         }
            //         className="  w-[30%] top-4 right-12 absolute z-30"
            //       >
            //         <img
            //           src={project.prop2}
            //           className="   object-contain "
            //           alt=""
            //         />
            //       </motion.div>
            //     </div>
            //     <motion.div
            //       initial={{ opacity: 0, y: 100, height: 0 }}
            //       animate={
            //         cardAnimation
            //           ? {
            //               opacity: 1,
            //               y: 0,
            //               x: 0,
            //               height: "fit-content",
            //               transition: {
            //                 type: "tween",
            //                 duration: 1.5,
            //                 delay: 0.2,
            //               },
            //             }
            //           : ""
            //       }
            //       className="  flex flex-col items-start justify-center mt-2"
            //     >
            //       <motion.p
            //         initial={{ opacity: 0 }}
            //         animate={
            //           cardAnimation
            //             ? {
            //                 opacity: 1,
            //                 transition: {
            //                   type: "tween",
            //                   duration: 0.8,
            //                   delay: 0.2,
            //                 },
            //               }
            //             : ""
            //         }
            //         className="text-sm"
            //       >
            //         {project.desc}
            //       </motion.p>
            //       <KnowMore path="/p1" className="mt-3" />
            //     </motion.div>
            //   </div>
            // </div>
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
      <div className=" h-full w-full flex justify-center items-center text-white">
        Hello
      </div>
    </>
  );
};

export default Landing;
