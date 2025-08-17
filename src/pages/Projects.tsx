import ProjectCard from "@/components/ProjectCard";
import { ProjectType2 } from "@/types/projectType";




const Projects = () => {

    const projects: ProjectType2[] = [
        {
            pname:"Atrangi",
            desc:"The fashion industry is a significant contributor to textile waste, with millions of tonnes of fabric being discarded annually. Project Atrangi aims to turn this reality on its head by transforming textile waste into sustainable fashion and creating meaningful livelihoods.",
            path:"atrangi",
            img1:"https://036za50svd.ufs.sh/f/YfSInbXC1cra1TXDE3pICgKVx8uDt0clRZnoyOB6HXMUqjpw",
            img2:"https://036za50svd.ufs.sh/f/YfSInbXC1cragnuqv0VOPNT3mSyvtYUlgEZc9bMGIxJuFq5k"

        },
        {
            pname:"Aarohan",
            desc:"Plastic waste is one of the most urgent environmental crises we face today. However, at Project Aarohan, we see it as an opportunity for innovation and sustainable change. We aim to build a circular economy around plastic by creating a system that collects waste from colleges, corporations, and communities and transforms it into valuable products",
            path:"aarohan",
            img1:"https://036za50svd.ufs.sh/f/YfSInbXC1craBQ52tGxOXUp5FuvbP9OA3tCryjcldmYn6ez2",
            img2:"https://036za50svd.ufs.sh/f/YfSInbXC1cra1A5thWZpICgKVx8uDt0clRZnoyOB6HXMUqjp"

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