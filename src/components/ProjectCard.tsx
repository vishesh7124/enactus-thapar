import { motion } from "motion/react";
import KnowMore from "@/components/KnowMore";
import { ProjectType2 } from "@/types/projectType";
import { cn } from "@/lib/utils";

interface Props {
    project: ProjectType2
    className?: string
}

const ProjectCard = ({project, className}:Props) => {
  return (
    <div
    style={{ backdropFilter: "blur(10px)" }}
    className={ cn(`bg-[#30303074] gap-28 max-[1025px]:gap-24  relative max-[960px]:mx-24  max-sm:mx-7 max-sm:mt-12  mx-40 mt-40 rounded-4xl text-white p-24 max-sm:p-12 flex justify-start items-center max-[1025px]:flex-col-reverse`,className)}
  >
    <div className="w-2/3 max-[960px]:w-full flex flex-col justify-center items-start  ">
        <h2 className="text-6xl text-[#FFC221] max-sm:text-5xl font-semibold max-[960px]:text-center "><span className="text-white" >PROJECT</span> {project.pname.toUpperCase()}</h2>
      <p className="mt-6 max-sm:text-xs ">
        {project.desc}
      </p>
      <KnowMore path={`/${project.path}`} className="max-[960px]:self-center" />
    </div>
    <div className="relative h-64 w-48 max-[960px]:h-56 max-[960px]:w-40 max-sm:h-40 max-sm:w-32 max-sm:mt-12 max-sm:ml-16 ">
      <motion.div initial={{rotate:-12}} whileInView={{rotate:5, transition:{type:"spring",duration:1}}} className="z-20 shadow-xl/30 absolute inset-0 rotate-12 left-4 top-10 card h-full w-full bg-white">
        <img src={project.img1} className="size-full object-contain" alt="" />
      </motion.div>
      <motion.div  initial={{rotate:12}}  whileInView={{rotate:-5, transition:{type:"spring",duration:1}}} className=" z-10 shadow-xl/30 absolute inset-0   -top-10 -left-20 -rotate-12 card h-full w-full bg-amber-300">
        <img src={project.img2} className="size-full object-contain" alt="" />
      </motion.div>
    </div>
  </div>
  )
}

export default ProjectCard