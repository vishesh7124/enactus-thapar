"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, color, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import PinnedPaper from "./PinnedPaper";
import { Badge } from "@/components/ui/badge";
import { LucideFileChartColumnIncreasing } from "lucide-react";
import { IconRun } from "@tabler/icons-react";
import { RoundTimeline } from "./RoundTimeline";
import { Marquee } from "./magicui/marquee";
import { PixelImage } from "./magicui/pixel-image";
import { cn } from "@/lib/utils";
import { OrbitingCircles } from "./magicui/orbiting-circles";

export function EventCard({ card }) {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center  z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6 "
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className=" w-full md:w-10/12   h-full md:h-fit md:max-h-[90%] md:mt-12  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-x-hidden overflow-y-scroll"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-80  sm:rounded-tr-lg sm:rounded-tl-lg object-contain object-top m-12"
                />
                <Marquee pauseOnHover className="[--duration:20s] ">
                  {card.gallery.map((item, index) => (
                    <figure
                      key={index}
                      className={cn(
                        "relative h-fit w-fit cursor-pointer overflow-hidden rounded-sm    "
                      )}
                    >
                      <PixelImage
                        src={item}
                        customGrid={{ rows: 4, cols: 6 }}
                        grayscaleAnimation
                      />
                    </figure>
                  ))}
                </Marquee>
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="bg-[#f3f4bbd2] p-4 font-satoshi font-semibold rounded-lg">
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-[#3E3C33] text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {/* {typeof active.content === "function"
                      ? active.content()
                      : active.content} */}
                    <p
                      style={{ color: card.colors.secondary }}
                      className={`text-3xl text-[${card.colors.secondary}] font-seriguel font-bold p-4 `}
                    >
                      ROUNDS
                    </p>
                    <RoundTimeline colors={card.colors} data={card.rounds} />

                    <div className="w-full flex justify-center items-center gap-12 my-10">
                      <div className="relative overflow-hidden h-[40rem] w-[50%]">
                        <OrbitingCircles radius={125}>
                          <img
                            src={card.sdg[0]}
                            className="h-36 w-36 object-contain"
                            alt=""
                          />
                        </OrbitingCircles>
                        <OrbitingCircles radius={250} reverse>
                          {card.sdg.slice(1).map((item, index) => (
                            <img
                              src={item}
                              key={index}
                              className="h-36 w-36 object-contain"
                              alt=""
                            />
                          ))}
                          {/* <img src={sdg4} className="h-36 w-36 object-contain" alt="" /> */}
                        </OrbitingCircles>
                      </div>
                      <div className="flex flex-col justify-center items-center gap-0">
                        <p
                          style={{ color: card.colors.secondary }}
                          className={`text-6xl text-[${card.colors.secondary}] font-seriguel text-uppercase font-bold `}
                        >
                          IMPACT{" "}
                        </p>
                        <p
                          style={{ color: card.colors.primary }}
                          className={`text-6xl text-[${card.colors.secondary}] font-seriguel text-uppercase font-bold  `}
                        >
                          CREATED{" "}
                        </p>
                      </div>
                    </div>

                    <div className="w-full gap-2 flex flex-col justify-center items-start py-8">
                      <p
                        style={{ color: card.colors.secondary }}
                        className={`text-3xl text-[${card.colors.secondary}] font-seriguel text-uppercase font-bold p-4 `}
                      >
                        GLANCE AT NUMBERS{" "}
                      </p>

                      <div className="flex justify-center gap-6 items-center flex-wrap ">
                        {(
                          Object.entries(card.numbers) as [string, number][]
                        ).map(([label, value], index) => (
                          <PinnedPaper
                            key={index}
                            className={`bg-[${
                              index % 2 === 0
                                ? card.colors.primary
                                : card.colors.secondary
                            }] `}
                            rotation={
                              index % 2 === 0 ? "rotate-2" : "-rotate-2"
                            }
                          >
                            <div className="whitespace-pre-line flex flex-col gap-2 text-[#3E3C33] ">
                              <h2 className="text-5xl font-seriguel  ">
                                {value}+
                              </h2>
                              <h3 className="text-xl  font-poppins  ">
                                {label}
                              </h3>
                            </div>
                          </PinnedPaper>
                        ))}
                      </div>
                    </div>
                    <div></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-1 items-start gap-4">
        <motion.div
          layoutId={`card-${card.title}-${id}`}
          key={card.title}
          onClick={() => setActive(card)}
          className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 bg-[#30303074]  rounded-xl cursor-pointer"
        >
          <div className="flex gap-12 flex-col  w-full">
            <motion.div layoutId={`image-${card.title}-${id}`}>
              <div className="flex justify-center items-center text-[#F3F4BB]">
                <img src={card.src} className="object-contain w-xl " alt="" />
              </div>
            </motion.div>
            <div className="flex justify-center items-center flex-col  p-4 font-satoshi font-semibold rounded-lg">
              <div className="flex justify-end items-center w-full  gap-6 mb-5 flex-wrap max-sm:justify-center  ">
                <Badge
                  variant="default"
                  className=" bg-[#96bf59] text-lg text-white rounded-2xl "
                >
                  <LucideFileChartColumnIncreasing className="h-4 w-4" />
                  Case Study Competition
                </Badge>
                <Badge
                  variant="default"
                  className=" bg-[#F3F4BB] text-lg text-black rounded-2xl "
                >
                  <IconRun className="h-4 w-4" />3 Rounds
                </Badge>
              </div>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-white text-center md:text-left text-base"
              >
                {card.description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
