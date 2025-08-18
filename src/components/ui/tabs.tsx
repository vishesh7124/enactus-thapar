"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import KnowMore from "../KnowMore";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
  logo?: string;
  info?: string;
  path?: string;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full ",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block text-black dark:text-white">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-24", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: 10 - idx, // 👈 ensures proper stacking
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
            pointerEvents: isActive(tab) ? "auto" : "none", // 👈 only active tab receives hover
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full  min-h-fit absolute top-0 left-0", className)}
        >
          <div className="w-full flex-col overflow-hidden relative min-h-fit   h-full rounded-2xl  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black from-40% border-4 border-[#FFF9E8] to-yellow-500">
            <div className=" relative flex w-full max-sm:flex-col-reverse  justify-start items-center">
              <div className=" relative max-[840px]:w-[30%] max-sm:w-full w-[45%]  flex justify-center items-center">
                {!tab.logo ? (
                  <div className="h-64 flex justify-center items-center mx-auto w-64 max-[840px]:w-36 max-sm:h-36 max-sm:w-36  " >
                    <p className="">{tab.title}</p>

                  </div>
                ) : (
                  <img
                    src={tab.logo}
                    alt="logo"
                    className="h-64 mx-auto w-64 max-[840px]:w-36 max-sm:h-36 max-sm:w-36  object-contain  "
                  />
                )}
              </div>
              <img
                src="https://036za50svd.ufs.sh/f/YfSInbXC1craZpkyqMByLspMeEURVoQT2KBmC7n3vFhIzOJ6"
                alt="dummy image"
                // width="1000"
                // height="1000"
                className="object-cover w-[34rem] h-full  border-4 border-[#FFF9E8]  sm:absolute top-0 right-0   rounded-xl "
              />{" "}
            </div>
            <div className="p-8 max-sm:pb-4 max-sm:pt-0 w-full flex flex-col items-start justify-start gap-2">
              <p className="text-sm md:text-base  font-light ">{tab.info}</p>
              <KnowMore
                path={`/${tab.path}`}
                className="text-base font-normal self-end "
                bgClass="bg-[#FFF9E8] "
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
