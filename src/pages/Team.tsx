import grpPic from "../assets/grp.webp";
import { motion } from "motion/react";
import { Faculty,Eb, Core } from "@/data/TeamData";
import ProfileCard from "@/components/ProfileCard";
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";


const Team = () => {
  return (
    <div className="relative z-0 w-full flex flex-col justify-center items-center gap-16 text-white pt-20">
      <div
        style={{ backdropFilter: "blur(10px)" }}
        className=" bg-[#30303074] gap-16  relative max-[960px]:mx-24  max-sm:mx-7  max-sm:mt-40 mx-40 my-20 rounded-4xl text-white p-8 flex justify-center max-sm:gap-8 items-center max-[960px]:flex-col"
      >
        <div className="w-1/2 max-[960px]:w-full flex flex-col justify-center items-start  ">
          <div>
            <h2 className="text-6xl text-[#FFC221] max-sm:text-5xl font-semibold ">
              <span className="text-white">Our</span> Team
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="255"
              height="11"
              viewBox="0 0 255 11"
              fill="none"
              className="max-sm:w-52"
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
          <p className="mt-6 max-sm:text-sm ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
          </p>
        </div>
        <div className="h-80  max-sm:h-64   ">
          <img
            src={grpPic}
            className=" h-full w-full border-8 border-[#FFC221] object-cover rounded-3xl"
            alt=""
          />
        </div>
      </div>

      <div className="relative z-0 w-full flex flex-col justify-center items-center gap-12 text-white">
        <div className="head">
          <div className="">
            <h2 className="text-6xl text-[#FFC221] max-sm:text-[2.75rem] text-center  font-semibold ">
              Faculty Mentors
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="440"
              height="12"
              viewBox="0 0 469 12"
              fill="none"
              className="max-sm:w-[20.5rem]"
            >
              <motion.path
                d="M3.00371 8.56722C270.82 11.1827 584.955 2.21515 417.359 2.21515C88.0468 2.21514 -99.7438 -1.52121 59.4293 4.83081C210.847 10.8733 394.619 10.2127 467.89 9.68815"
                stroke="#FFF9E8"
                stroke-width="2"
                stroke-linecap="round"
                initial={{ opacity: 0, pathLength: 0 }}
                whileInView={{
                  opacity: 1,
                  pathLength: 1,
                  transition: { duration: 1, delay: 0.5 },
                }}
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-wrap px-36 max-sm:px-20 justify-center items-center gap-11 my-4 w-full">
          {Faculty.map((member, index) => (
            <ProfileCard key={index} member={member} />
          ))}
        </div>
      </div>
      <div className="relative z-0 w-full flex flex-col justify-center items-center gap-12 text-white">
        <div className="head">
          <div className="">
            <h2 className="text-6xl text-[#FFC221] max-sm:text-[2.75rem] text-center  font-semibold ">
              Executive Board
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="440"
              height="12"
              viewBox="0 0 469 12"
              fill="none"
              className="max-sm:w-[20.5rem]"
            >
              <motion.path
                d="M3.00371 8.56722C270.82 11.1827 584.955 2.21515 417.359 2.21515C88.0468 2.21514 -99.7438 -1.52121 59.4293 4.83081C210.847 10.8733 394.619 10.2127 467.89 9.68815"
                stroke="#FFF9E8"
                stroke-width="2"
                stroke-linecap="round"
                initial={{ opacity: 0, pathLength: 0 }}
                whileInView={{
                  opacity: 1,
                  pathLength: 1,
                  transition: { duration: 1, delay: 0.5 },
                }}
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-wrap px-36 max-sm:px-20 justify-center items-center gap-11 my-4 w-full">
          {Eb.map((member, index) => (
            <ProfileCard key={index} member={member} />
          ))}
        </div>
      </div>
      <div className="relative z-0 w-full flex flex-col justify-center items-center gap-12 mt-16 text-white overflow-hidden ">
        <div className="head">
          <div className="">
            <h2 className="text-6xl text-[#FFC221] max-sm:text-[2.75rem] text-center  font-semibold ">
              Core Team
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="316"
              height="11"
              viewBox="0 0 316 11"
              fill="none"
              className="max-sm:w-[20.5rem]"

            >
              <motion.path
                d="M2.29711 8.53679C182.182 11.185 393.178 2.10532 280.609 2.10532C59.4183 2.10531 -66.7157 -1.67774 40.1967 4.75368C141.9 10.8717 265.335 10.2028 314.549 9.67173"
                stroke="#FFF9E8"
                stroke-width="2"
                stroke-linecap="round"
                initial={{ opacity: 0, pathLength: 0 }}
                whileInView={{
                  opacity: 1,
                  pathLength: 1,
                  transition: { duration: 1, delay: 0.5 },
                }}
              />
            </svg>
          </div>
        </div>
        <Marquee pauseOnHover  className="[--duration:20s]">
          {Core.map((member, index) => (
            <figure
              key={index}
              className={cn(
                "relative h-fit w-fit cursor-pointer overflow-hidden rounded-xl border   ",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
              )}
            >
                <ProfileCard key={index} member={member} />

            </figure>
          ))}
        </Marquee>
        <Marquee pauseOnHover reverse  className="[--duration:20s]">
          {Core.map((member, index) => (
            <figure
              key={index}
              className={cn(
                "relative h-fit w-fit cursor-pointer overflow-hidden rounded-xl border   ",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
              )}
            >
                <ProfileCard key={index} member={member} />

            </figure>
          ))}
        </Marquee>
        <div className="flex flex-wrap px-36 max-sm:px-20 justify-center items-center gap-11 my-4 w-full">
        </div>
      </div>
    </div>
  );
};

export default Team;
