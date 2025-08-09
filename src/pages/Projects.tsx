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
    <div className="relative z-0 w-full flex flex-col justify-center items-center gap-16 text-white pt-55">
        <h1 className=" relative w-full text-center text-white text-8xl max-sm:text-5xl max-sm:mb-30 font-bold  " >
            P R O J E C T S
        </h1>
        <div className="w-full mb-16 ">
            {projects.map((project,index)=>(
                <ProjectCard className={index%2!==0 ?"flex-row-reverse":""}  key={index} project={project} />
            ))}

        </div>
    </div>
    
  )
}

export default Projects