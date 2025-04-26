import ProjectCard from "@/components/ProjectCard";
import { ProjectType2 } from "@/types/projectType";
import at1 from "../assets/atrangi-2.png"
import at2 from "../assets/atrangi-3.png"




const Projects = () => {

    const projects: ProjectType2[] = [
        {
            pname:"Atrangi",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
            path:"atrangi",
            img1:at1,
            img2:at2

        },
        {
            pname:"Atrangi",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
            path:"atrangi",
            img1:at1,
            img2:at2

        },
        {
            pname:"Atrangi",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
            path:"atrangi",
            img1:at1,
            img2:at2

        },
        {
            pname:"Atrangi",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
            path:"atrangi",
            img1:at1,
            img2:at2

        },
    ]

  return (
    <>
        <h1 className=" relative w-full my-50 text-center text-white text-8xl max-sm:text-5xl max-sm:mb-30 font-bold  " >
            P R O J E C T S
        </h1>
        {projects.map((project,index)=>(
            <ProjectCard className={index%2!==0 ?"flex-row-reverse":""}  key={index} project={project} />
        ))}
    </>
    // <div
    //   style={{ backdropFilter: "blur(10px)" }}
    //   className=" bg-[#30303074] gap-4 max-[1025px]:gap-24  relative max-[960px]:mx-24  max-sm:mx-7 max-sm:mt-40  mx-40 my-20 mt-50 rounded-4xl text-white p-24 max-sm:p-12 flex justify-between items-center max-[1025px]:flex-col-reverse"
    // >
    //   <div className="w-2/3 max-[960px]:w-full flex flex-col justify-center items-start  ">
    //       <h2 className="text-6xl text-[#FFC221] max-sm:text-5xl font-semibold max-[960px]:text-center "><span className="text-white" >PROJECT</span> ATRANGI</h2>
    //     <p className="mt-6 max-sm:text-xs ">
    //       Lorem Ipsum is simply dummy text of the printing and typesetting
    //       industry. Lorem Ipsum has been the industry's standard dummy text ever
    //       since the 1500s, when an unknown printer took a galley of type and
    //       scrambled it to make a type specimen book. It has survived not only
    //       five centuries, but also the leap into electronic typesetting,
    //       remaining essentially unchanged. It was popularised in the 1960s with
    //       the release of Letraset sheets containing Lorem Ipsum passages,
    //     </p>
    //     <KnowMore path="/about" className="max-[960px]:self-center" />
    //   </div>
    //   <div className="relative h-64 w-48 max-[960px]:h-56 max-[960px]:w-40 max-sm:h-40 max-sm:w-32 max-sm:mt-12 max-sm:ml-16 ">
    //     <motion.div initial={{rotate:-12}} whileInView={{rotate:5, transition:{type:"spring",duration:1}}} className="z-20 absolute inset-0 rotate-12 left-4 top-10 card h-full w-full bg-white">
    //     </motion.div>
    //     <motion.div  initial={{rotate:12}}  whileInView={{rotate:-5, transition:{type:"spring",duration:1}}} className=" z-10 absolute inset-0   -top-10 -left-20 -rotate-12 card h-full w-full bg-amber-300">
    //     </motion.div>
    //   </div>
    // </div>
  )
}

export default Projects