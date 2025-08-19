import Solution_banner from "@/components/Solution_Banner";
import aatrangiBanner from "../assets/atrangi_banner.png";
import Problem_banner from "@/components/Problem_banner";
import BusinessModel from "@/components/BuisnessModel";
import Impact from "@/components/Impact";
import UnitEconomics from "@/components/UnitEconomics";
import { useParams } from "react-router";
import sdg1 from "@/assets/sdg1.png";
import bgImage from "@/assets/bgImage.webp"
import bag from "../assets/bag1.png"



const projectData = {
  atrangi:{
    name: "Atrangi",
    description: "Atrangi is a project that focuses on sustainable fashion by transforming textile waste into valuable products, creating livelihoods and reducing environmental impact.",
    banner: aatrangiBanner,
    problems: [
      "Problem 1",
      "Problem 2",
      "Problem 3",
      "Problem 4",
    ],
    solutions: [
      "Solution 1",
      "Solution 2",
      "Solution 3",
      "Solution 4",
    ],
    chartData : [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },

],
  bModel:[
    {
      img: bag,
      text: "this content is meant for business content. it explaints the contents in brief. basic understanding given."
    },
    {
      img: bag,
      text: "this content is meant for business content. it explaints the contents in brief. basic understanding given."
    },
    {
      img: bag,
      text: "this content is meant for business content. it explaints the contents in brief. basic understanding given."
    },
    {
      img: bag,
      text: "this content is meant for business content. it explaints the contents in brief. basic understanding given."
    }
  ],
  impact:[
  {
    sdg:sdg1,
    bgImage:bgImage,
    color:"#ec1527",
    title:"No Poverty",
    desc:"lorem10duhhdjkhjksbjvkjbvkjvskbljvbkjbvjdbdvjbkjvdbkjbvjbjvbkjbdvjkbvdkjbdvkjbj"
  },
  {
    sdg:sdg1,
    bgImage:bgImage,
    color:"#ec1527",
    title:"No Poverty",
    desc:"lorem10duhhdjkhjksbjvkjbvkjvskbljvbkjbvjdbdvjbkjvdbkjbvjbjvbkjbdvjkbvdkjbdvkjbj"
  },
  {
    sdg:sdg1,
    bgImage:bgImage,
    color:"#ec1527",
    title:"No Poverty",
    desc:"lorem10duhhdjkhjksbjvkjbvkjvskbljvbkjbvjdbdvjbkjvdbkjbvjbjvbkjbdvjkbvdkjbdvkjbj"
  },
  {
    sdg:sdg1,
    bgImage:bgImage,
    color:"#ec1527",
    title:"No Poverty",
    desc:"lorem10duhhdjkhjksbjvkjbvkjvskbljvbkjbvjdbdvjbkjvdbkjbvjbjvbkjbdvjkbvdkjbdvkjbj"
  },
  ]

  }
}

const Proj = () => {

  const params = useParams();
  const project = projectData[encodeURIComponent(params.pname ?? "") as keyof typeof projectData];
  return (
    <div className="relative z-0 w-full flex flex-col justify-center items-center gap-16 text-white pt-55">
        <img src={project.banner} className="mb-20 mx-auto w-4xl max-sm:w-2xl h-auto "/>
        <Problem_banner problems={project.problems} />
        <Solution_banner solutions={project.solutions} />
        <UnitEconomics chartData={project.chartData} />
        <BusinessModel businessItems={project.bModel} />
        <Impact impactData={project.impact} />
    </div>
  )
}

export default Proj;
