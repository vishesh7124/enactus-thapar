import Hero from "@/components/Hero";
import About from "@/components/About";
import { motion } from "motion/react";
import atrangi from "../assets/atrangi.png";
import aarohan from "../assets/arohan.png";
import fil1 from "../assets/fil1.png";
import fil2 from "../assets/fil2.png";
import bag1 from "../assets/bag1.png";
import bag2 from "../assets/bag2.png";
import at1 from "../assets/at1.png";
import ar1 from "../assets/ar1.png";
import { projectsType } from "@/types/projectType";
import Project from "@/components/Project";
import Partners from "@/components/Partners";
import { LandingEvent } from "@/components/LandingEvent";
import { eventType1 } from "@/types/eventTypes";



  const events:eventType1[] = [
    {
      id:"1",
      title: "Aarambh",
      logo:"https://036za50svd.ufs.sh/f/YfSInbXC1craS0DlV1NCYemqFk0xN2zo31HQGtWZ6AaBv5if",
      info:"Aarambh ’24, the annual fest of Enactus Thapar, featured a diverse lineup of entrepreneurial and innovation-driven events. From Sustainathon, a sustainability-focused case study competition, to Startup Foundry, a Shark Tank-style fundraising platform, and Synergy Spark, an intra-college case study challenge, the fest celebrated creativity and problem-solving. It also hosted Founder’s Nexus, an inspiring speaker session with startup founders, bringing real-world insights to the student community.",
      path:"aarambh",
      image:"https://036za50svd.ufs.sh/f/YfSInbXC1craZpkyqMByLspMeEURVoQT2KBmC7n3vFhIzOJ6"

    },

    {
      id: "2",
      title: "Social Budgeting Convention",
      logo:"https://036za50svd.ufs.sh/f/YfSInbXC1craeM98cFbS2oFxZ5GTWDmqzdXjcJE9a8Ar3Vfl",
      info:"The Social Budgeting Convention 2023, hosted by Enactus Thapar, brought together aspiring student entrepreneurs, social innovators, and changemakers under one roof. The event offered a platform to discuss sustainable business ideas, exchange insights, and network with like-minded peers and mentors. Through interactive sessions and showcases, the convention underscored Enactus Thapar’s commitment to building socially conscious ventures.",
      image:"https://036za50svd.ufs.sh/f/YfSInbXC1cra1QGgkWpICgKVx8uDt0clRZnoyOB6HXMUqjpw",
            path:"aarambh",


    },
    {
      id: "3",
      title: "Corporate Roadies",
      logo:"https://036za50svd.ufs.sh/f/YfSInbXC1cra6WcmaHzuwa2VWqBbmXfrFt5x8PvgCouzhRk9",
      info:"Corporate Roadies 2023, hosted by Enactus Thapar, was an engaging and dynamic challenge that brought together students to experience the thrill of the corporate world through team-based tasks and real-world business simulations. Participants stepped into the shoes of budding professionals, navigating competitive scenarios and leadership tests designed to mirror high-stakes corporate environments.",
      image:"https://036za50svd.ufs.sh/f/YfSInbXC1craI7KsVc4UlNpgxM4EFKGXn0qtWQwsLb9H7iPA",
            path:"aarambh",


    },
        {
      id:"4",
      title: "Deepotsav",
      info:"Deepotsav, one of Enactus Thapar’s flagship cultural initiatives, is a Diwali celebration that blends festivity with social impact. The event brings the campus community together to light diyas, celebrate the festival of lights, and promote eco-friendly practices. With stalls, activities, and a focus on sustainability, Deepotsav spreads joy while reinforcing the values of tradition, inclusivity, and responsibility.",
      image:"https://036za50svd.ufs.sh/f/YfSInbXC1craSAdbzHNCYemqFk0xN2zo31HQGtWZ6AaBv5if",
            path:"aarambh",


    },

  ];

const projects: projectsType = [
  {
    pname: "Atrangi",
    bg: at1,
    logo: atrangi,
    prop1: bag1,
    prop2: bag2,
    desc:"The fashion industry is a significant contributor to textile waste, with millions of tonnes of fabric being discarded annually. Project Atrangi aims to turn this reality on its head by transforming textile waste into sustainable fashion and creating meaningful livelihoods.",
    path:"/atrangi"
    
  },
  {
    pname: "Aarohan",
    bg: ar1,
    logo: aarohan,
    prop1: fil2,
    prop2: fil1,
    // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    desc: "Plastic waste is one of the most urgent environmental crises we face today. However, at Project Aarohan, we see it as an opportunity for innovation and sustainable change. We aim to build a circular economy around plastic by creating a system that collects waste from colleges, corporations, and communities and transforms it into valuable products.",
    path:"/aarohan"
  },
];

const Landing = () => {
  return (
    <div className="relative z-0 w-full flex flex-col justify-center items-center gap-16 text-white pt-55">
      <Hero />
      <About />
      <div className=" relative z-0 w-full flex flex-col justify-center items-center gap-16 text-white">
        <div className="head">
          <div>
            <h2 className="text-6xl text-[#FFC221] max-sm:text-5xl ">
              Our Projects
            </h2>
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="11"
                viewBox="0 0 255 11"
                fill="none"
                className="max-md:w-40"
              >
                <motion.path
                  initial={{ opacity: 0, pathLength: 0 }}
                  whileInView={{
                    opacity: 1,
                    pathLength: 1,
                    transition: { duration: 1, delay: 0.5 },
                  }}
                  d="M1.60484 8.53679C147.007 11.185 317.557 2.10532 226.566 2.10532C47.7763 2.10531 -54.1787 -1.67774 32.2393 4.75368C114.447 10.8717 214.22 10.2028 254 9.67173"
                  stroke="#FFF9E8"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="115"
                height="11"
                viewBox="0 0 115 11"
                fill="none"
                className="max-md:w-20"
              >
                <motion.path
                  initial={{ opacity: 0, pathLength: 0 }}
                  whileInView={{
                    opacity: 1,
                    pathLength: 1,
                    transition: { duration: 1, delay: 1.5 },
                  }}
                  d="M1.27015 8.53679C66.2127 11.185 142.387 2.10532 101.747 2.10532C21.8922 2.10531 -23.645 -1.67774 14.9528 4.75368C51.67 10.8717 96.2328 10.2028 114 9.67173"
                  stroke="#FFF9E8"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center items-center gap-16 max-sm:flex-col mb-8 ">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>

      </div>
        <div
          className="flex flex-col  w-full   py-12 justify-evenly items-center max-sm:flex-col mb-8 overflow-hidden max-sm:!mask-none "
          style={{
            maskImage:
              "linear-gradient(to top, transparent 0%, black 12.5%, black 87.5%, transparent 100%)",
          }}
        >
          {/* <EventC /> */}
          {/* <Partners/> */}
                    <div>
            <h2 className="text-6xl text-[#FFC221] max-sm:text-5xl ">
              Our Events
            </h2>
            <div className="flex gap-4">
                            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="11"
                viewBox="0 0 115 11"
                fill="none"
                className="max-md:w-20"
              >
                <motion.path
                  initial={{ opacity: 0, pathLength: 0 }}
                  whileInView={{
                    opacity: 1,
                    pathLength: 1,
                    transition: { duration: 1, delay: 1.5 },
                  }}
                  d="M1.27015 8.53679C66.2127 11.185 142.387 2.10532 101.747 2.10532C21.8922 2.10531 -23.645 -1.67774 14.9528 4.75368C51.67 10.8717 96.2328 10.2028 114 9.67173"
                  stroke="#FFF9E8"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="175"
                height="11"
                viewBox="0 0 255 11"
                fill="none"
                className="max-md:w-40"
              >
                <motion.path
                  initial={{ opacity: 0, pathLength: 0 }}
                  whileInView={{
                    opacity: 1,
                    pathLength: 1,
                    transition: { duration: 1, delay: 0.5 },
                  }}
                  d="M1.60484 8.53679C147.007 11.185 317.557 2.10532 226.566 2.10532C47.7763 2.10531 -54.1787 -1.67774 32.2393 4.75368C114.447 10.8717 214.22 10.2028 254 9.67173"
                  stroke="#FFF9E8"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

            </div>
          </div>
          <LandingEvent events={events}/>

        </div>
        <div
          className="flex  w-full h-[33rem] max-sm:h-fit pb-10 justify-evenly items-center max-sm:flex-col mb-8 overflow-hidden max-sm:!mask-none "
          style={{
            maskImage:
              "linear-gradient(to top, transparent 0%, black 12.5%, black 87.5%, transparent 100%)",
          }}
        >
          <Partners/>

        </div>
      {/* <div className=" h-full w-full flex justify-center items-center text-white">
        Hello
      </div> */}
    </div>
  );
};

export default Landing;
