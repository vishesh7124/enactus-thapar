import { motion } from "motion/react";
import { Marquee } from "./magicui/marquee";
import { PixelImage } from "./magicui/pixel-image";
import { PointerHighlight } from "./ui/pointer-highlight";

import { Link } from "react-router";
import { cn, chunkObjectValues } from "@/lib/utils";

import bonkers from "@/assets/bonkers.png";
import manipal from "@/assets/manipal.png";
import niine from "@/assets/niine.png";
import atrangi from "../assets/atrangi.png";

const partners = {
  manipal: manipal,
  bonkers: bonkers,
  niine: niine,
  atrangi: atrangi,
  manipal2: manipal,
  bonkers1: bonkers,
  niine1: niine,
  atrangi1: atrangi,
  atrangi2: atrangi,
};

const Partners = () => {
  const MarqueeArrays = chunkObjectValues(partners, 3);

  return (
    <>
      <div
        className="sm:hidden mb-12"
        style={{
          maskImage:
            "linear-gradient(to top, transparent 0%, black 12.5%, black 87.5%, transparent 100%)",
        }}
      >
        <h2 className="text-6xl text-[#FFC221] max-sm:text-5xl font-semibold ">
          Our Partners
        </h2>
        <div className="flex gap-4">
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
                transition: { duration: 1, delay: 0.5 },
              }}
              d="M1.27015 8.53679C66.2127 11.185 142.387 2.10532 101.747 2.10532C21.8922 2.10531 -23.645 -1.67774 14.9528 4.75368C51.67 10.8717 96.2328 10.2028 114 9.67173"
              stroke="#FFF9E8"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
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
                transition: { duration: 1, delay: 1.5 },
              }}
              d="M1.60484 8.53679C147.007 11.185 317.557 2.10532 226.566 2.10532C47.7763 2.10531 -54.1787 -1.67774 32.2393 4.75368C114.447 10.8717 214.22 10.2028 254 9.67173"
              stroke="#FFF9E8"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>

      <div
        className="inset-0 flex max-sm:h-[20rem] max-[850px]:mx-11  "
        style={{
          // rotateX(-25deg) rotateY(-40deg) rotateZ(20deg)
          // transform:
          // "translateX(-443px) translateY(0px) translateZ(-67px) ",
          maskImage: `
  linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%),
  linear-gradient(to top, transparent 0%, black 12.5%, black 87.5%, transparent 100%)
`,
          maskComposite: "intersect",
        }}
      >
        {MarqueeArrays.map((arr, index) => (
          <Marquee
            key={index}
            reverse={index % 2 !== 0 ? true : false}
            pauseOnHover
            vertical
            className="[--duration:5s] "
          >
            {arr.map((item, index) => (
              <figure
                key={index}
                className={cn(
                  "relative h-fit w-fit cursor-pointer overflow-hidden rounded-sm    "
                )}
              >
                <PixelImage
                  className="h-28 w-28 max-[840px]:h-24 max-[840px]:w-24  max-sm:h-20 max-sm:w-20"
                  src={item}
                  customGrid={{ rows: 4, cols: 6 }}
                  grayscaleAnimation
                />
              </figure>
            ))}
          </Marquee>
        ))}
      </div>
      <div className="flex flex-col h-full max-sm:h-fit pt-10 justify-center gap-5 items-center">
        <div className="max-sm:hidden">
          <h2 className="text-6xl text-[#FFC221] max-[800px]:text-5xl  font-semibold ">
            Our Partners
          </h2>
          <div className="flex gap-4 max-[800px]:w-[85%] ">
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
                  transition: { duration: 1, delay: 0.5 },
                }}
                d="M1.27015 8.53679C66.2127 11.185 142.387 2.10532 101.747 2.10532C21.8922 2.10531 -23.645 -1.67774 14.9528 4.75368C51.67 10.8717 96.2328 10.2028 114 9.67173"
                stroke="#FFF9E8"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
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
                  transition: { duration: 1, delay: 1.5 },
                }}
                d="M1.60484 8.53679C147.007 11.185 317.557 2.10532 226.566 2.10532C47.7763 2.10531 -54.1787 -1.67774 32.2393 4.75368C114.447 10.8717 214.22 10.2028 254 9.67173"
                stroke="#FFF9E8"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>

        <div className="mx-auto flex flex-col justify-center items-center max-w-lg text-lg  max-[840px]:w-2/3 font-semibold text-center tracking-tight  md:text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor harum
          veniam consequuntur fuga labore adipisci dolorum hic libero officiis
          possimus.
          <PointerHighlight
            rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
            pointerClassName="text-yellow-500"
          >
            <span className="relative z-10">Collaborate</span>
          </PointerHighlight>
        </div>

        <Link to="mailto:no-reply@example.com">
          <button className=" w-32 relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#FFC221] hover:bg-[#FFF9E8] px-3 py-1 text-sm font-medium text-zinc-950 backdrop-blur-3xl">
              Get in Touch
            </span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Partners;
