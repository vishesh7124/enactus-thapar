import { EventTimeline } from "@/components/EventTimeline"

const Events = () => {
  return (
        <>
        {/* <h1 className=" relative w-full my-50 text-center text-white text-8xl max-sm:text-5xl max-sm:mb-30 font-bold  " >
            E V E N T S
        </h1> */}
        <EventTimeline/>
        {/* {projects.map((project,index)=>(
            <ProjectCard className={index%2!==0 ?"flex-row-reverse":""}  key={index} project={project} />
        ))} */}
    </>
  )
}

export default Events