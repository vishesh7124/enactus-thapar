import grpPic from "../assets/grp.webp";
import { motion } from "motion/react";
import KnowMore from "./KnowMore";

const About = () => {
  return (
    <div
      style={{ backdropFilter: "blur(10px)" }}
      className=" bg-[#30303074] gap-8  relative max-[960px]:mx-24  max-sm:mx-7  mx-40 my-20 rounded-4xl text-white p-8 flex justify-between items-center max-[960px]:flex-col"
    >
      <div className="w-1/2 max-[960px]:w-full flex flex-col justify-center items-start  ">
        <div>
          <h2 className="text-6xl text-[#FFC221] max-sm:text-5xl ">About Us</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="255"
            height="11"
            viewBox="0 0 255 11"
            fill="none"
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
        <p className="mt-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages,
        </p>
        <KnowMore path="/about" className="max-[960px]:self-center" />
      </div>
      <div className="h-80  ">
        <img
          src={grpPic}
          className=" h-full w-full object-cover rounded-3xl"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
