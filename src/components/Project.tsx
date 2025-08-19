import KnowMore from "./KnowMore";
import { motion } from "motion/react";
import { useState } from "react";
import { ProjectType } from "@/types/projectType";

interface Props {
  project: ProjectType;
}

const Project = ({ project }: Props) => {
  const [cardAnimation, setCardAnimation] = useState(false);
  const isIpad = window.matchMedia("(max-width: 968px)").matches;

  return (
    <div
      className=" relative   p-10 overflow-hidden w-5/12 max-sm:w-10/12  flex flex-col justify-center items-center rounded-4xl text-white   "
      onMouseEnter={() => setCardAnimation(true)}
      onMouseLeave={() => setCardAnimation(false)}
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${project.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{
          opacity: cardAnimation ? 0 : 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute inset-0 z-10 bg-[#30303074]`}
        animate={{
          opacity: cardAnimation ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      />
      <div className="relative z-20 w-full flex flex-col items-center">
        <div className="images  w-full relative flex justify-center items-center ">
          <motion.div
            initial={{ y: -210, x: -30 }}
            animate={
              cardAnimation
                ? {
                    y: 0,
                    x: 15,
                    transition: {
                      type: "spring",
                      duration: 1.5,
                      bounce: 0.3,
                    },
                  }
                : {
                    y: -210,
                    x: -30,
                    transition: { type: "keyframes", duration: 0.5 },
                  }
            }
            className="z-10 w-[35%] -top-6 max-[968px]:top-2    left-2 max-[968px]:-left-8 absolute"
          >
            <img
              src={project.prop1}
              className=" min-h-10/12  object-contain "
              alt=""
            />
          </motion.div>

          <motion.img
            src={project.logo}
            alt=""
            className="  w-1/2 object-contain z-20 "
            initial={{ width: "75%", height: isIpad ? "15rem" : "20rem" }}
            animate={
              cardAnimation
                ? {
                    width: isIpad ? "70%" : "50%",
                    height: isIpad ? "8rem" : "12rem",
                    transition: { type: "tween", duration: 1.5 },
                  }
                : ""
            }
          />
          <motion.div
            initial={{ x: 80, y: 380 }}
            animate={
              cardAnimation
                ? {
                    y: 0,
                    x: 10,
                    transition: {
                      type: "spring",
                      duration: 1.5,
                      bounce: 0.3,
                    },
                  }
                : {
                    x: 80,
                    y: 380,
                    transition: { type: "keyframes", duration: 0.8 },
                  }
            }
            className="  w-[30%] top-4 right-12 max-[968px]:right-2 max-[968px]:top-8 absolute z-30"
          >
            <img src={project.prop2} className="   object-contain " alt="" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100, height: 0 }}
          animate={
            cardAnimation
              ? {
                  opacity: 1,
                  y: 0,
                  x: 0,
                  height: "fit-content",
                  transition: {
                    type: "tween",
                    duration: 1.5,
                    delay: 0.2,
                  },
                }
              : ""
          }
          className="  flex flex-col items-start justify-center mt-2"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={
              cardAnimation
                ? {
                    opacity: 1,
                    transition: {
                      type: "tween",
                      duration: 0.8,
                      delay: 0.2,
                    },
                  }
                : ""
            }
            className="text-sm"
          >
            {project.desc}
          </motion.p>
          <KnowMore path={`/projects${project.path}`} className="mt-3" />
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
