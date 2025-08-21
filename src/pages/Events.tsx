import { Timeline } from "@/components/ui/timeline";

import { Badge } from "@/components/ui/badge";
import { IconRun } from "@tabler/icons-react";
import { LucideFileChartColumnIncreasing } from "lucide-react";

import { useParams } from "react-router";


const eventData = {
  aarambh:[{
    
      description: `Sustain-a-thon, part of AARAMBH 2024, was an overnight case study competition designed to tackle pressing challenges through creative solutions. It brought together students from diverse backgrounds to ideate and implement sustainable solutions, encouraging a problem-solving mindset focused on real-world issues.`,
      src: "https://036za50svd.ufs.sh/f/YfSInbXC1cra6Jp0Bvuwa2VWqBbmXfrFt5x8PvgCouzhRk9Y",
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
      gallery: ["https://036za50svd.ufs.sh/f/YfSInbXC1craZpkyqMByLspMeEURVoQT2KBmC7n3vFhIzOJ6", "https://036za50svd.ufs.sh/f/YfSInbXC1craLmcc3eAasymAnFetuk7X2SOh8WVYMD9Rb5Hj", "https://036za50svd.ufs.sh/f/YfSInbXC1craCtWCssaoPUgYFIEdh5u8zqH0nK2vxWNQfcA9", "https://036za50svd.ufs.sh/f/YfSInbXC1crafvPXy9j0SRV6KNTqaUeop2EnciuOtdMxjgJ1", "https://036za50svd.ufs.sh/f/YfSInbXC1craXxgZWunnT9aFDvBh5mpjV1SkxzgXKsGiAR7C"],
      sdg: ["https://036za50svd.ufs.sh/f/YfSInbXC1craxmMmc6sOeNFI9nTjri4cEk1y8UKdBJgLaSuw", "https://036za50svd.ufs.sh/f/YfSInbXC1crajf5oG8wShbtexNuPmdJ1C4oHOZ3irLFcXkwq", "https://036za50svd.ufs.sh/f/YfSInbXC1craPI3FdcTjxILsMWZuaiXSwfOKnkA9QPBryTYo"],
      eventTypeBadge: (
        <Badge
          variant="default"
          className=" bg-[#96bf59] text-lg max-sm:text-base text-white rounded-2xl "
        >
          <LucideFileChartColumnIncreasing className="h-4 w-4" />
          Case Study Competition
        </Badge>
      ),
      InfoBadge: (
        <Badge
          variant="default"
          className=" bg-[#F3F4BB] text-lg max-sm:text-base text-black rounded-2xl "
        >
          <IconRun className="h-4 w-4" />3 Rounds
        </Badge>
      ),
    
  },

  {
    
      description: `Startup Foundry was a startup accelerator competition that brought startups and venture capitalists together, fostering entrepreneurship through funding opportunities, mentorship, pitching, and critical feedback. It acted as a catalyst for innovation and supported the growth of emerging ventures.`,
      src: "https://036za50svd.ufs.sh/f/YfSInbXC1craoqFdcuyEPvVd6C9cgj1akOW07lBw82zFhUIe",
      rounds: [
        "Idea Screening Through Questionnaire Submission",
        "Pitchdeck Submission",
        "Final Pitching Round",
      ],
      numbers: {
        "VC Firms Onboarded": 20,
        "Professionals invited": 20,
        "Startups Pitched": 25,
        "Possible Collaborations Initiated": 15,
        "Colleges Participated": 10,
      },
      colors: {
        primary: "#E1DDB1",
        secondary: "#ECA149",
      },
      gallery: ["https://036za50svd.ufs.sh/f/YfSInbXC1craQRrt4o5Msjnw3YbiVHJ7Oht1mPUXg9qyFc4D", "https://036za50svd.ufs.sh/f/YfSInbXC1craUU1v3qKV6cZhgB3AtqOGo2f0nxUbjSY1mTDd", "https://036za50svd.ufs.sh/f/YfSInbXC1cra7AufdN6jW5y6qV9UYXOfrsE1xmQ0wuctLGod", "https://036za50svd.ufs.sh/f/YfSInbXC1craNsM2DiJ7bKtvw4OmNkEQq3grHBUXu21yjl0I", "https://036za50svd.ufs.sh/f/YfSInbXC1crasLBu3Xo1KnW5aYXd48POmUbwBEjohxseSyHL"],
      sdg: ["https://036za50svd.ufs.sh/f/YfSInbXC1craEsvarK0QijpBzD7VCrJnyUa4cxFdm8Lh92SZ", "https://036za50svd.ufs.sh/f/YfSInbXC1cracv9mJTxh9w07qagTjVWJ3HbuXkesGzOnFISE", "https://036za50svd.ufs.sh/f/YfSInbXC1craPI3FdcTjxILsMWZuaiXSwfOKnkA9QPBryTYo"],
      eventTypeBadge: (
        <Badge
          variant="default"
          className=" bg-[#FFC220] text-lg max-sm:text-base text-white rounded-2xl "
        >
          <LucideFileChartColumnIncreasing className="h-4 w-4" />
          Startup Accelerator
        </Badge>
      ),
      InfoBadge: (
        <Badge
          variant="default"
          className=" bg-[#B8A14E] text-lg max-sm:text-base text-black rounded-2xl "
        >
          <IconRun className="h-4 w-4" />4 Rounds
        </Badge>
      ),
    
  },
  {
    
      description: `Synergy Spark, a flagship event of AARAMBH at Thapar University, was a collaborative innovation challenge where students developed products and services for companies chosen through an auction. The event fostered creativity and practical problem-solving, encouraging disruptive ideas to tackle real-world challenges.`,
      src: "https://036za50svd.ufs.sh/f/YfSInbXC1crawqaHFVEhXGcFDjwE8f6qzIv23xnoKmYtBUsS",
      
      numbers: {
        "Students Participated": 250,
        "Experts and Mentors": 10,
        "Innovative Solutions": 20,
        "Participating Teams": 39,
      },
      colors: {
        secondary: "#FFEC86",
        primary: "#B8A14E",
      },
      gallery: ["https://036za50svd.ufs.sh/f/YfSInbXC1craQnWJyp5Msjnw3YbiVHJ7Oht1mPUXg9qyFc4D","https://036za50svd.ufs.sh/f/YfSInbXC1cra0OcDv0hgNelu7YyTk6arf0AjmoDtEzRL1qVK","https://036za50svd.ufs.sh/f/YfSInbXC1craNQx7p8J7bKtvw4OmNkEQq3grHBUXu21yjl0I", "https://036za50svd.ufs.sh/f/YfSInbXC1crai7ycPFgESFfnrLzoRwBHgeuaOYMWTsJGKt3y", "https://036za50svd.ufs.sh/f/YfSInbXC1craLxr9DIAasymAnFetuk7X2SOh8WVYMD9Rb5Hj","https://036za50svd.ufs.sh/f/YfSInbXC1craEUEffT0QijpBzD7VCrJnyUa4cxFdm8Lh92SZ","https://036za50svd.ufs.sh/f/YfSInbXC1crauFdxNLrVcatx3AoSbn2sWzdi9qvR4gEYumZT" ],
      sdg: ["https://036za50svd.ufs.sh/f/YfSInbXC1craxmMmc6sOeNFI9nTjri4cEk1y8UKdBJgLaSuw", "https://036za50svd.ufs.sh/f/YfSInbXC1crajf5oG8wShbtexNuPmdJ1C4oHOZ3irLFcXkwq", "https://036za50svd.ufs.sh/f/YfSInbXC1craPI3FdcTjxILsMWZuaiXSwfOKnkA9QPBryTYo"],
      eventTypeBadge: (
        <Badge
          variant="default"
          className=" bg-[#ECA149] text-lg max-sm:text-base text-white rounded-2xl "
        >
          <LucideFileChartColumnIncreasing className="h-4 w-4" />
          Case Study Competition
        </Badge>
      ),
      InfoBadge: (
        <Badge
          variant="default"
          className=" bg-[#E1DDB1] text-lg max-sm:text-base text-black rounded-2xl "
        >
          <IconRun className="h-4 w-4" />3 Rounds
        </Badge>
      )
    
  },
  {
    
      description: `Enactus Thapar hosted Founders Nexus, a speaker session where successful founders shared their journeys, inspiring students to embrace entrepreneurship and transform ideas into ventures.`,
      src: "https://036za50svd.ufs.sh/f/YfSInbXC1craqOXF42ojK78Gv69VcfikS4TL5MOoXeE3plWa",

      numbers: {
        "Founders Invited": 4,
        "Aspiring students attended": 350,
        "Key startup strategies": 10,
        "Networking connections": 20,
      },
      colors: {
        secondary: "#FFC220",
        primary: "#B8A14E",
      },
      gallery: ["https://036za50svd.ufs.sh/f/YfSInbXC1craJPKQMFIsjWDNwuPZdyLV9hx1TFGc3XmrEl6e","https://036za50svd.ufs.sh/f/YfSInbXC1craDLzUa2iYijaSdn3yCXqJR4oTPQKUzZfcIBrV","https://036za50svd.ufs.sh/f/YfSInbXC1craKdkvNu7pYrhdDK3lfwgez7Z8yuiTXFQMoVv9","https://036za50svd.ufs.sh/f/YfSInbXC1crajFbYXKwShbtexNuPmdJ1C4oHOZ3irLFcXkwq","https://036za50svd.ufs.sh/f/YfSInbXC1cra1rVoVLpICgKVx8uDt0clRZnoyOB6HXMUqjpw"],
      sdg: ["https://036za50svd.ufs.sh/f/YfSInbXC1craxmMmc6sOeNFI9nTjri4cEk1y8UKdBJgLaSuw", "https://036za50svd.ufs.sh/f/YfSInbXC1crajf5oG8wShbtexNuPmdJ1C4oHOZ3irLFcXkwq", "https://036za50svd.ufs.sh/f/YfSInbXC1craPI3FdcTjxILsMWZuaiXSwfOKnkA9QPBryTYo"],
      eventTypeBadge: (
        <Badge
          variant="default"
          className=" bg-[#B8A14E] text-lg max-sm:text-base text-white rounded-2xl "
        >
          <LucideFileChartColumnIncreasing className="h-4 w-4" />
          Speaker Session
        </Badge>
      ),
      InfoBadge: (
        <Badge
          variant="default"
          className=" bg-[#FFEC86] text-lg max-sm:text-base text-black rounded-2xl "
        >
          <IconRun className="h-4 w-4" />4 Speakers
        </Badge>
      ),
    
  },


],



};
const Events = () => {
    const params = useParams();
  const event = eventData[encodeURIComponent(params.ename ?? "") as keyof typeof eventData];
  return (
    <>
      <div className="  w-full pt-50 mb-16 text-center text-white text-8xl max-sm:text-5xl max-sm:mb-12 font-bold  ">
        <img src={"https://036za50svd.ufs.sh/f/YfSInbXC1craS0DlV1NCYemqFk0xN2zo31HQGtWZ6AaBv5if"} className="object-contain mx-auto w-xl max-sm:w-80" alt="" />
      </div>
      {/* <h1 className=" relative w-full my-50 text-center text-white text-8xl max-sm:text-5xl max-sm:mb-30 font-bold  ">
        E V E N T S
      </h1> */}
      
      {event.map((item, index) => (
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
