"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import  { useEffect, useRef, useState } from "react";
import { eventType2 } from "@/types/eventTypes";


import { EventCard } from "../EventCard";

export const Timeline = ({ item, align, title }: { item: eventType2, align:"left" | "right", title:string }) => {
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
            className={`flex flex-row${align==="right"?"-reverse":""} justify-start pt-16 max-sm:gap-8 md:py-20 [840px]:gap-10 max-[840px]:gap-5`}
          >
            <div 
            style={{flexDirection:align==="right"?"row-reverse":"row"}}
            className={`sticky flex flex-col md:flex-row${align==="right"?"-reverse":""}  items-center top-40 self-start max-w-xs md:max-w-[16rem] md:w-full max`}>
              <div
               style={{margin:align==="right"?"0 0.75rem 0 0":"0 0 0 0.75rem",background:item.colors.secondary}}
               className='h-10 absolute  w-10 rounded-full bg-white dark:bg-black flex items-center justify-center'>
                <div 
                               style={{background:item.colors.primary}}

                className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800  p-2" />
              </div>
              <h3 
                            style={{padding:align==="right"?"0 5rem 0 0":"0 0 0 5rem"}}

              className={`hidden md:block text-xl   md:text-5xl font-bold text-neutral-500 dark:text-white `}>
                {title}
              </h3>
            </div>

            <div className="relative max-md:pl-8 max-md:pr-8 pl-4 pr-4 w-full">
              <EventCard card={item}/>
            </div>
          </div>
        <div
          style={{
            height: height + "px",
          }}
          className={`absolute -z-10 ${align==="right"?"md:right-8 right-8":"md:left-8 left-8"} top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-yellow-400 dark:via-yellow-500 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]`}
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
