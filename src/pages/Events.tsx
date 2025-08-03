import { Timeline } from "@/components/ui/timeline";
import sustainathon from "@/assets/sustainathon.png";

const card = {
  description: `Sustain-a-thon, part of AARAMBH 2024, was an overnight case study competition designed to tackle pressing challenges through creative solutions. It brought together students from diverse backgrounds to ideate and implement sustainable solutions, encouraging a problem-solving mindset focused on real-world issues.`,
  src: sustainathon,
  rounds: [
    "Biz Blitz- The business quiz",
    "Overnight hackathon",
    "Final Pitching Round",
    "Final Pitching Round",
  ],
  numbers: {
    "Students Participated": 250,
    "Hours of Brainstorming": 10,
    "Colleges Participate": 15,
    "Case Studies Solved": 5,
    "Participating Teams": 50,
  },
  colors: {
    primary: "#f3f4bbd2",
    secondary: "#8CBF40",
  },
};

const data = [
  {
    title: "DAY 1",
    card: {
      description: `Sustain-a-thon, part of AARAMBH 2024, was an overnight case study competition designed to tackle pressing challenges through creative solutions. It brought together students from diverse backgrounds to ideate and implement sustainable solutions, encouraging a problem-solving mindset focused on real-world issues.`,
      src: sustainathon,
      rounds: [
        "Biz Blitz- The business quiz",
        "Overnight hackathon",
        "Final Pitching Round",
      ],
      numbers: {
        "Students Participated": 250,
        "Hours of Brainstorming": 10,
        "Colleges Participate": 15,
        "Case Studies Solved": 5,
        "Participating Teams": 50,
      },
      colors: {
        primary: "#f3f4bbd2",
        secondary: "#8CBF40",
      },
    },
  },

  {
    title: "DAY 2",

    card: card,
  },
];

const Events = () => {
  return (
    <>
      <h1 className=" relative w-full my-50 text-center text-white text-8xl max-sm:text-5xl max-sm:mb-30 font-bold  ">
        E V E N T S
      </h1>
      {data.map((item, index) => (
        <div key={index} className="relative w-full overflow-clip">
          <Timeline
            item={item}
            title={`DAY ${index + 1}`}
            align={index % 2 === 0 ? "left" : "right"}
          />
        </div>
      ))}

      {/* <EventTimeline/>
        <EventTimeline/> */}
      {/* {projects.map((project,index)=>(
            <ProjectCard className={index%2!==0 ?"flex-row-reverse":""}  key={index} project={project} />
        ))} */}
    </>
  );
};

export default Events;
