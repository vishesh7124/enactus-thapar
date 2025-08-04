import { Timeline } from "@/components/ui/timeline";
import sustainathon from "@/assets/sustainathon.png";
import i1 from "@/assets/i1.png";
import i2 from "@/assets/i2.png"
import i3 from "@/assets/i3.png"
import i4 from "@/assets/i4.png"
import i5 from "@/assets/i5.png"

import sdg4 from "@/assets/E_GIF_04.gif"
import sdg13 from "@/assets/E_GIF_13.gif"
import sdg17 from "@/assets/E_GIF_17.gif"


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
  gallery:[i1,i2,i3,i4,i5],
  sdg:[sdg4,sdg13,sdg17]
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
        gallery:[i1,i2,i3,i4,i5],
          sdg:[sdg4,sdg13,sdg17]
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
