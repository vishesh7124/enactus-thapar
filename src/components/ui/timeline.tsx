"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import  { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  card:object
}

import { EventCard } from "../EventCard";

export const Timeline = ({ item, align, title }: { item: TimelineEntry, align:"left" | "right", title:string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 80%"],
  });


  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Scroll progress:", latest);
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full relative bg-transparent font-sans md:px-10"
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        
          <div
            className={`flex flex-row${align==="right"?"-reverse":""} justify-start pt-10 md:pt-40 md:gap-10`}
          >
            <div className={`sticky flex flex-col md:flex-row${align==="right"?"-reverse":""} z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full`}>
              <div className={`h-10 absolute ${align==="right"?"right-3":"left-3"}  md:right-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center`}>
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className={`hidden md:block text-xl md:${align==="right"?"pr-20":"pl-20"} md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 `}>
                {title}
              </h3>
            </div>

            <div className="relative pl-20 max-md:pr-20 pr-4 md:pl-4 w-full">
              <EventCard card={item.card}/>
            </div>
          </div>
        <div
          style={{
            height: height + "px",
          }}
          className={`absolute ${align==="right"?"md:right-8 right-8":"md:left-8 left-8"} top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-yellow-400 dark:via-yellow-500 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]`}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-yellow-400 via-yellow-300 to-white from-[0%] via-[40%] rounded-full"
          />
        </div>


      </div>
    </div>
  );
};
