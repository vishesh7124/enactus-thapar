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
      "Post-pandemic economic decline threatening artisans and traditional crafts.",
      "Water pollution caused by the fashion industry, consuming ~79 billion cubic meters of water annually and generating 20% of global wastewater.",
      "Non-decomposable textile waste, with ~90 million tons generated annually that take years to break down.",
      "Local communities dependent on crafts face declining income opportunities due to industry disruption."
    ],
    solutions: [
      "Upcycling: Recycling and reusing textile waste into sustainable fashion products.",
      "Cost savings: Affordable fusion-wear crafted by artisans, linking heritage with modernity.",
      "Reduce wastage: Transforming textile waste into designer products with minimal impact.",
      "Circular economy: Supporting a continuous reuse cycle to minimize environmental harm."
    ],
    chartData : [
  { browser: "Fabric Cost", visitors: 30, fill: "var(--color-chrome)" },
  { browser: "Artisan Pay", visitors: 25, fill: "var(--color-safari)" },
  { browser: "Logistics", visitors: 20, fill: "var(--color-firefox)" },
  { browser: "Packaging", visitors: 15, fill: "var(--color-edge)" },
  { browser: "Marketing", visitors: 10, fill: "var(--color-other)" },
],
  bModel:[
      {
        img: bag,
        text: "Value Proposition: Sustainable fashion products that merge tradition with modernity, customization options, and eco-friendly practices."
      },
      {
        img: bag,
        text: "Customer Segments: Ethical consumers, eco-conscious youth, NGOs, local communities, and educational institutions."
      },
      {
        img: bag,
        text: "Key Activities & Resources: Product design, artisan collaboration, recycled materials, e-commerce, awareness campaigns, branding."
      },
      {
        img: bag,
        text: "Revenue & Cost: Income through product sales, collaborations, and customization fees; costs include artisan compensation, logistics, marketing, and sustainable packaging."
      }
    ],
impact:[
    {
      sdg:sdg1,
      bgImage:bgImage,
      color:"#a21caf",
      title:"Good Jobs and Economic Growth",
      desc:"Generating livelihoods for artisans while promoting sustainable and ethical employment opportunities."
    },
    {
      sdg:sdg1,
      bgImage:bgImage,
      color:"#ec1527",
      title:"No Poverty",
      desc:"Supporting traditional communities by providing consistent income through craft and textile upcycling."
    },
    {
      sdg:sdg1,
      bgImage:bgImage,
      color:"#d946ef",
      title:"Gender Equality",
      desc:"Empowering women artisans by recognizing and sustaining their traditional embroidery and textile skills."
    },
    {
      sdg:sdg1,
      bgImage:bgImage,
      color:"#f97316",
      title:"Innovation and Infrastructure",
      desc:"Promoting innovation through circular economy models and sustainable infrastructure in fashion."
    }
  ]

  },
  aarohan: {
  name: "Aarohan",
  description: "Project Aarohan converts plastic waste into high quality eco-friendly 3D printer filament, offering industries a sustainable alternative while giving plastic a renewed purpose.",
  banner: aatrangiBanner,
  problems: [
    "Thousands of plastic bottles are discarded after single use despite being recyclable.",
    "3D printing industry relies on expensive and unsustainable filament made from new plastic.",
    "Plastic waste leads to environmental pollution and increased CO2 emissions.",
    "Lack of sustainable alternatives for industries to reuse plastic effectively."
  ],
  solutions: [
    "Collect plastic waste from institutions and NGOs.",
    "Sort waste into PET, HDPE, LDPE, and MLPs for recycling.",
    "Clean and process PET bottles to remove residues and contaminants.",
    "Convert processed plastic into hollow 3D printing filament and distribute through partners and online."
  ],
  chartData: [
    { browser: "Gross Profit", visitors: 49.2, fill: "var(--color-chrome)" },
    { browser: "Labour", visitors: 12.1, fill: "var(--color-safari)" },
    { browser: "Miscellaneous", visitors: 9.4, fill: "var(--color-firefox)" },
    { browser: "Packaging", visitors: 10.5, fill: "var(--color-edge)" },
    { browser: "Logistics", visitors: 7.1, fill: "var(--color-other)" },
    { browser: "Sales & Marketing", visitors: 8.2, fill: "var(--color-chrome)" },
    { browser: "Opex", visitors: 2.7, fill: "var(--color-safari)" },
    { browser: "Maintenance", visitors: 0.8, fill: "var(--color-firefox)" }
  ],
  bModel: [
    {
      img: bag,
      text: "Plastic waste is collected from institutions and NGOs."
    },
    {
      img: bag,
      text: "Waste is segregated into PET, HDPE, LDPE, and MLPs."
    },
    {
      img: bag,
      text: "PET bottles are thoroughly cleaned to remove residues and contaminants."
    },
    {
      img: bag,
      text: "Processed plastic is converted into hollow 3D printing filament, 30% supplied to partner institutions and rest sold online/offline."
    }
  ],
  impact: [
    {
      sdg: sdg1,
      bgImage: bgImage,
      color: "#f26a2e",
      title: "Industry, Innovation and Infrastructure",
      desc: "Promotes sustainable 3D printing innovation by converting plastic waste into eco-friendly filament."
    },
    {
      sdg: sdg1,
      bgImage: bgImage,
      color: "#f9c32d",
      title: "Sustainable Cities and Communities",
      desc: "Diverts plastic waste from landfills and builds sustainable practices across cities and institutions."
    },
    {
      sdg: sdg1,
      bgImage: bgImage,
      color: "#bb9534",
      title: "Responsible Consumption and Production",
      desc: "Provides a circular economy solution by reusing plastic bottles into productive materials."
    },
    {
      sdg: sdg1,
      bgImage: bgImage,
      color: "#3fa14c",
      title: "Climate Action",
      desc: "Reduces CO2 emissions by recycling plastic, cutting reliance on virgin plastic production."
    }
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
